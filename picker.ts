import { FilePickerMessage } from './pickermessages';

module Kosy {
    const developerKey = "AIzaSyCSV8-5iNEVGubHa83iskEhwSbkO0nBmEk";
    const client_id = "1055348097262-umvi6mnq47jh9d6io4ha1s49e4hln03p.apps.googleusercontent.com";

    //The google driver picker wraps google's drive picker with extra information and message passing 
    //(this is how google recommends the picker is implemented)
    export class GoogleDrivePicker {
        public async start() {
            let authResult = await this.authorizeAppForGoogleDrive();

            //If the user wasn't authorized, close the pop-up
            if (!authResult || authResult.error) {
                window.close();
            }

            let picker = await this.createPicker(authResult.access_token);

            //Makes the picker appear on-screen
            picker.setVisible(true);
        }

        private async authorizeAppForGoogleDrive() {
            //Load the authentication scripts from the google api (gapi)
            await new Promise((resolve, reject) => {
                gapi.load("client:auth2", (callback) => resolve(callback));
            });

            //Initialize and show a "log in with your google account" dialog (if necessary)
            await gapi.client.init({
                clientId: client_id,
                scope: "https://www.googleapis.com/auth/drive.file"
            });

            return gapi.client.getToken();
        }

        private async createPicker(accessToken: string) {
            //Load the picker script from the google api (gapi)
            await new Promise ((resolve, reject) =>{
                gapi.load("picker", (callback) => resolve(callback));
            });

            //Use the google pickerbuilder to generate the picker -> 
            return new google.picker.PickerBuilder()
                    //Filters the view for documents
                    .addView(google.picker.ViewId.DOCS)
                    .setOAuthToken(accessToken)
                    .setDeveloperKey(developerKey)
                    //You need to set up the origin, otherwise the iframe doesn't have permission to be shown
                    .setOrigin(`${window.location.protocol}//${window.location.host}`)
                    .setCallback((data: any) => {
                        //If a document was picked
                        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                            let doc = data[google.picker.Response.DOCUMENTS][0];
                            //Get an embeddable url
                            let url = doc[google.picker.Document.EMBEDDABLE_URL];
                            //Notify the main app
                            this.sendMessage({ type: "file-picked", payload: url });
                            //Close the pop-up
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
        private sendMessage (relayMessage: FilePickerMessage) {
            (window.opener as Window).postMessage(relayMessage, "*");
        }    
    }
}

new Kosy.GoogleDrivePicker().start();