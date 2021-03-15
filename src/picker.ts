import { FilePickerMessage } from "./lib/pickermessages";
import "./styles/style.scss";
import settings from "./../settings.json";

module Kosy.Integration.GoogleDrive {
    const SCOPE = "https://www.googleapis.com/auth/drive.file";
    interface PickerParams {
        google: {
            "api_key": string,
            "client_id": string
        }
    }

    //The google driver picker wraps google's drive picker with extra information and message passing 
    //(this is how google recommends the picker is implemented)
    export class Picker {
        public async start(params: PickerParams) {
            let authResponse = await this.authorizeAppForGoogleDrive(params.google.client_id);

            //If the user wasn't authorized, close the pop-up
            if (!authResponse) {
                this.sendMessage({ type: "file-picker-closed", payload: { } });
                window.close();
            }

            let picker = await this.createPicker(authResponse.access_token, params.google.api_key);

            //Makes the picker appear on-screen
            picker.setVisible(true);
        }

        private async authorizeAppForGoogleDrive(googleClientId: string): Promise<gapi.auth2.AuthResponse> {
            //Load the authentication scripts from the google api (gapi)
            await new Promise((resolve, reject) => {
                gapi.load("auth2", {
                    callback: () => resolve({}),
                    onerror: () => reject (),
                    timeout: 5000,
                    ontimeout: () => reject ()
                });
            });

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

        private async createPicker(oauthToken: string, googleApiKey: string) {
            //Load the picker script from the google api (gapi)
            await new Promise((resolve, reject) => {
                gapi.load("picker", {
                    callback: () => resolve({}),
                    onerror: () => reject(),
                    timeout: 5000,
                    ontimeout: () => reject()
                });
            });

            //Use the google pickerbuilder to generate the picker -> 
            return new google.picker.PickerBuilder()
                    //Filters the view for documents
                    .addView(google.picker.ViewId.DOCS)
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey(googleApiKey)
                    //You need to set up the origin, otherwise the iframe doesn't have permission to be shown
                    .setOrigin(`${window.location.protocol}//${window.location.host}`)
                    .setCallback((data: any) => {
                        //If a document was picked
                        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                            let doc = data[google.picker.Response.DOCUMENTS][0];
                            //Get an embeddable url
                            let url = doc[google.picker.Document.EMBEDDABLE_URL];
                            //Notify the main app
                            this.sendMessage({ type: "file-picker-closed", payload: { googleDriveUrl: url } });
                            window.close();
                        }
                        //If cancel was clicked, close the pop-up
                        if (data[google.picker.Response.ACTION] == google.picker.Action.CANCEL) {
                            this.sendMessage({ type: "file-picker-closed", payload: {} });
                            window.close();
                        }
                    })
                    .build();
        }

        //Sends a message back to the main app
        private sendMessage (filePickerMessage: FilePickerMessage) {
            (window.opener as Window).postMessage(filePickerMessage, window.location.origin);
        }    
    }
    new Picker().start(settings);
}