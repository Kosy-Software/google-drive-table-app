import settings from "./../../settings.json";

const googleRegex = new RegExp("^(https://\\w+.google.com)");
const googleDriveRegex = new RegExp("^(https://(drive|docs).google.com)", "i");
//Just matches the first file identifier it comes across (google file identifiers are always exactly 25 characters long)
const googleDriveFileIdRegex = new RegExp("/d/([-\\w]{25,})");
const FILEAPISCOPE = "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly";
const JAN1970 = new Date("1970-01-01T00:00:00Z").getTime();

export function hasValidGoogleFormat (url: string) {
    return url && googleRegex.test(url)
}

export function createFileShareLink (urlString: string) {
    let url = new URL(urlString.replace("/preview", "/edit"));
    url.searchParams.append("userstoinvite", "@");
    return url.toString();
}

export async function convertGoogleLinkToEmbeddableLink (url: string): Promise<string> {
    let googleDriveFileId = parseGoogleDriveFileId(url);
    await loadGoogleApi("client");
    let authResponse = await authorizeWithGoogle();
    gapi.client.setApiKey(settings.google.api_key);
    gapi.client.setToken({ access_token: authResponse.access_token });
    try {
        let response = await gapi.client.request({ path: `https://www.googleapis.com/drive/v3/files/${googleDriveFileId}?fields=webViewLink` });
        let webViewLink = JSON.parse(response?.body || "{}").webViewLink as string;
        if (webViewLink) {
            if (!googleDriveRegex.test(webViewLink)) {
                let googleDriveFileId = parseGoogleDriveFileId(webViewLink);
                return Promise.resolve(`https://drive.google.com/file/d/${googleDriveFileId}/preview`);
            } else {
                return Promise.resolve(url.replace("/view", "/preview"));
            }
        }
        return Promise.reject()
    } catch (ex) {
        return Promise.reject()
    }
}

function parseGoogleDriveFileId (url: string): string {
    let parsed = url.match(googleDriveFileIdRegex);
    if (parsed && parsed.length > 1) {
        return parsed[1];
    } else {
        return null;
    }
}

export async function authorizeWithGoogle() {
    //Fetch the google token from localstorage
    let authResponse = JSON.parse(localStorage.getItem("google_access_token") || "{}") as gapi.auth2.AuthResponse;

    //To determine if the token is still valid
    //Add expiresAt to januari 1st 1970 (and subtract 1 minute as a safety margin)
    let expirationDate = new Date(JAN1970 + (authResponse?.expires_at || 600000) - 60000);

    //If the auth response has expired - go fetch a new token
    if (expirationDate < new Date()) {
        authResponse = await authorizeAppForGoogleDrive();
        localStorage.setItem("google_access_token", JSON.stringify(authResponse));
    }
    return authResponse;
}

//Google's auth instance messes up the type system......... X_x
function withGoogleAuthScope<X>(fx: (googleAuth: gapi.auth2.GoogleAuth) => X): Promise<X> {
    return gapi.auth2
        .init({
            client_id: settings.google.client_id,                        
            scope: FILEAPISCOPE
        })
        .then(() => fx(gapi.auth2.getAuthInstance()));
}

export async function getUserIsSignedIntoGoogle(): Promise<boolean> {
    await loadGoogleApi("auth2");
    return withGoogleAuthScope((googleAuth) => googleAuth.isSignedIn.get() && googleAuth.currentUser.get().hasGrantedScopes(FILEAPISCOPE));
}

async function authorizeAppForGoogleDrive(): Promise<gapi.auth2.AuthResponse> {
    //Load the authentication scripts from the google api (gapi)
    await loadGoogleApi("auth2");
    let authorizeResponse = await withGoogleAuthScope((googleAuth) => {
        //Initialize and show a "log in with your google account" dialog (if necessary)
        return new Promise<gapi.auth2.AuthResponse>((resolve, reject) => {
            try {
                // Handle initial sign-in state. (Determine if user is already signed in.)
                let user = googleAuth.currentUser.get()
                // If the user has granted access to the correct scopes
                if (user.hasGrantedScopes(FILEAPISCOPE)) {
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
    })
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