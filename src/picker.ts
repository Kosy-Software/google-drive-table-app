import type { GoogleDriveUrlPicked } from './lib/componentMessages';
import { authorizeWithGoogle } from './lib/googleDrive';
import settings from "./../settings.json";

const SCOPE = "https://www.googleapis.com/auth/drive.file";
module Kosy.Integration.GoogleDrive {
    //The google driver picker wraps google's drive picker with extra information and message passing 
    //(this is how google recommends the picker is implemented)
    export class Picker {

        public async start() {
            let authResponse = await authorizeWithGoogle(SCOPE).catch(() => null);
            //If the user wasn't authorized, close the pop-up
            if (!authResponse) {
                window.close();
            }

            let picker = await this.createPicker(authResponse.access_token, settings.google.api_key);

            //Makes the picker appear on-screen
            picker.setVisible(true);
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
                    .enableFeature(google.picker.Feature.NAV_HIDDEN)
                    //You need to set up the origin, otherwise the iframe doesn't have permission to be shown
                    .setOrigin(`${window.location.protocol}//${window.location.host}`)
                    .setCallback(async (data: any) => {
                        //If a document was picked
                        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                            //Get the file id
                            let doc = data[google.picker.Response.DOCUMENTS][0];

                            //Notify the main app
                            let url = doc[google.picker.Document.URL] as string;
                            this.sendMessage({ type: "google-drive-url-picked", payload: { url: url, error: doc.isShared ? undefined : "NotShared" } });
                            window.close();
                        }
                        //If cancel was clicked, close the pop-up
                        if (data[google.picker.Response.ACTION] == google.picker.Action.CANCEL) {
                            window.close();
                        }
                    })
                    .build();
        }

        //Sends a message back to the main app
        private sendMessage (filePickerMessage: GoogleDriveUrlPicked) {
            (window.opener as Window).postMessage(filePickerMessage, window.location.origin);
        }    
    }
    new Picker().start();
}