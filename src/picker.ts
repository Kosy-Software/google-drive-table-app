import type { GoogleDriveUrlPicked } from './lib/componentMessages';
import { authorizeWithGoogle } from './lib/googleDrive';

module Kosy.Integration.GoogleDrive {
    //The google driver picker wraps google's drive picker with extra information and message passing 
    //(this is how google recommends the picker is implemented)
    export class Picker {

        public async start() {
            let authResponse = await authorizeWithGoogle().catch(() => null);
            //If the user wasn't authorized, close the pop-up
            if (!authResponse) {
                window.close();
            }

            let picker = await this.createPicker(authResponse.access_token, __GOOGLE_API_KEY__);

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

            let viewId: google.picker.ViewId;

            switch (__BUILD_TYPE__) {
                case "docs": viewId = google.picker.ViewId.DOCUMENTS; break;
                case "sheets": viewId = google.picker.ViewId.SPREADSHEETS; break;
                case "slides": viewId = google.picker.ViewId.PRESENTATIONS; break;
            }

            //Use the google pickerbuilder to generate the picker -> 
            return new google.picker.PickerBuilder()
                    .addView(viewId)
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