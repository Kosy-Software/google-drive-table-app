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
    gapi.client.setApiKey(__GOOGLE_API_KEY__);
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
async function withGoogleAuthScope<X>(fx: (googleAuth: gapi.auth2.GoogleAuth) => X): Promise<X> {
    await loadGoogleApi("auth2");
    return gapi.auth2
        .init({
            client_id: __GOOGLE_CLIENT_ID__,                        
            scope: FILEAPISCOPE
        })
        .then(() => fx(gapi.auth2.getAuthInstance()));
}

export async function getUserIsSignedIntoGoogle(): Promise<boolean> {
    return withGoogleAuthScope((googleAuth) => googleAuth.isSignedIn.get() && googleAuth.currentUser.get().hasGrantedScopes(FILEAPISCOPE));
}

async function authorizeAppForGoogleDrive(): Promise<gapi.auth2.AuthResponse> {
    //Load the authentication scripts from the google api (gapi)
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
                reject (error);
            }
        });
    })
    return authorizeResponse;
}

async function loadGoogleApi(apiKey: string): Promise<any> {
    return new Promise((resolve, reject) =>
        gapi.load(apiKey, {
            callback: () => resolve({}),
            onerror: (e: any) => reject (e),
            timeout: 5000,
            ontimeout: () => reject ()
        })
    )
}

async function loadGoogleApiLibrary(apiKey: string, version: string): Promise<void> {
    return new Promise((resolve, reject) => {
        gapi.client.load(apiKey, version, () => resolve())
    });
}

export type GoogleDriveFileType = "document" | "sheet" | "slide";
export async function createGoogleDriveFile(fileType: GoogleDriveFileType, fileName: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {        
        let link = await withGoogleAuthScope(async (googleAuth) => {
            await loadGoogleApi("client");
            await loadGoogleApiLibrary("drive", "v3");
            let fileExtension: string;
            let mimeType: string;
            switch (fileType) {
                case "document":
                    fileExtension = "docx";
                    mimeType = "application/vnd.google-apps.document"
                    break;
                case "sheet":
                    fileExtension = "xlsx";
                    mimeType = "application/vnd.google-apps.spreadsheet"
                    break;
                case "slide":
                    fileExtension = "pptx";
                    mimeType = "application/vnd.google-apps.presentation"
                    break;
                default:
                    fileExtension = "docx";
                    mimeType = "application/vnd.google-apps.document"
                    break;
            }
            let user = googleAuth.currentUser.get()
            let fileResponse = await gapi.client.drive.files.create({
                resource: {
                    name: `${fileName}.${fileExtension}`,
                    mimeType: mimeType
                },                
                fields: "id,webViewLink",                
            });
            await gapi.client.drive.permissions.create({
                fileId: fileResponse.result.id,
                resource: {
                    role: "writer",
                    type: "anyone"
                },
                oauth_token: user.getAuthResponse().access_token
            });
            return fileResponse.result.webViewLink;
        });
        return resolve(link);
    }).catch(e => { console.error(e); return Promise.reject(e); });
}