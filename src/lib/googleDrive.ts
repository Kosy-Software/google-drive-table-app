import settings from "./../../settings.json";

const googleRegex = new RegExp("^(https://\\w+.google.com)")
//Just matches the first file identifier it comes across (google file identifiers are always exactly 25 characters long)
const googleDriveRegex = new RegExp("/d/([-\\w]{25,})")

export function isValidGoogleDriveUrl (url: string) {
    return url && googleRegex.test(url)
}

export async function determineGoogleDriveUrl (fileId: string) {
    if (!fileId) return null; //Unknown, we don't know what to do with this

    let authResponse = await authorizeWithGoogle();
    if (!authResponse) return null;

    await loadGoogleApi("client");
    gapi.client.setApiKey(settings.google.api_key);
    gapi.client.setToken({ access_token: authResponse.access_token });
    try {
        let response = await gapi.client.request({ path: `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink` });
        let webViewLink = JSON.parse(response?.body || "{}").webViewLink as string;
        if (webViewLink) {
            //An exception to the "editable" rule, google doesn't allow jamboard to be editable in an iframe
            if (webViewLink.startsWith("https://jamboard.google.com")) {
                return `https://drive.google.com/file/d/${fileId}/preview`
            }
            //We can't use /view, so this needs to be /preview for the embedded URL
            return webViewLink.replace("/view", "/preview");
        }
    } catch (e) {
        document.getElementById("debug").innerHTML = "Error: " + JSON.stringify(e);
        return null;
    }
}


export function parseGoogleDriveFileId (url: string): string {
    let parsed = url.match(googleDriveRegex);
    if (parsed && parsed.length > 1) {
        return parsed[1];
    } else {
        return null;
    }
}


const SCOPE = "https://www.googleapis.com/auth/drive.file";
const JAN1970 = new Date("1970-01-01T00:00:00Z").getTime();

export async function authorizeWithGoogle() {
    //Fetch the google token from localstorage
    let authResponse = JSON.parse(localStorage.getItem("google_access_token") || "{}") as gapi.auth2.AuthResponse;

    //To determine if the token is still valid
    //Add expiresAt to januari 1st 1970 (and subtract 1 minute as a safety margin)
    let expirationDate = new Date(JAN1970 + (authResponse?.expires_at || 0) - 60000);

    //If the auth response has expired - go fetch a new token
    if (expirationDate < new Date()) {
        authResponse = await authorizeAppForGoogleDrive(settings.google.client_id);
        localStorage.setItem("google_access_token", JSON.stringify(authResponse));
    }
    return authResponse;
}

async function authorizeAppForGoogleDrive(googleClientId: string): Promise<gapi.auth2.AuthResponse> {
    //Load the authentication scripts from the google api (gapi)
    await loadGoogleApi("auth2");

    //Initialize and show a "log in with your google account" dialog (if necessary)
    let authorizeResponse: gapi.auth2.AuthResponse = await new Promise((resolve, reject) => {
        try {
            gapi.auth2.init({
                client_id: googleClientId,                        
                scope: SCOPE,
                fetch_basic_profile: false
            });

            let googleAuth = gapi.auth2.getAuthInstance();

            // Handle initial sign-in state. (Determine if user is already signed in.)
            var user = googleAuth.currentUser.get();
            // If the user has granted access to the correct scopes
            if (user.hasGrantedScopes(SCOPE)) {
                // Return the auth response
                resolve(user.getAuthResponse(true));
            } else {
                // Sign in
                googleAuth
                    .signIn()
                    .then((googleUser) => resolve(googleUser.getAuthResponse(true)))
                    .catch((e) => reject(e));
            }
        } catch(error) {
            reject ();
        }
    });

    return authorizeResponse;
}

async function loadGoogleApi(apiKey: string): Promise<any> {
    return new Promise((resolve, reject) =>
        gapi.load(apiKey, {
            callback: () => resolve({}),
            onerror: () => reject (),
            timeout: 5000,
            ontimeout: () => reject ()
        })
    )
}