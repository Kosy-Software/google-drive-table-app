/// <reference types="./pickermessages" />

module Kosy.Integration.GoogleDrive {
    interface PickerParams {
        google: {
            "developer_key": string,
            "client_id": string
        }
    }

    //The google driver picker wraps google's drive picker with extra information and message passing 
    //(this is how google recommends the picker is implemented)
    export class Picker {
        public async start(params: PickerParams) {
            let authResult = await this.authorizeAppForGoogleDrive(params.google.client_id);

            //If the user wasn't authorized, close the pop-up
            if (!authResult || authResult.error) {
                window.close();
            }

            let picker = await this.createPicker(authResult.access_token, params.google.developer_key);

            //Makes the picker appear on-screen
            picker.setVisible(true);
        }

        private async authorizeAppForGoogleDrive(googleClientId: string) {
            //Load the authentication scripts from the google api (gapi)
            await new Promise((resolve, reject) => {
                gapi.load("client:auth2", (callback) => resolve(callback));
            });

            //Initialize and show a "log in with your google account" dialog (if necessary)
            await gapi.client.init({
                clientId: googleClientId,
                scope: "https://www.googleapis.com/auth/drive.file"
            });

            return gapi.client.getToken();
        }

        private async createPicker(oauthToken: string, googleDeveloperKey: string) {
            //Load the picker script from the google api (gapi)
            await new Promise ((resolve, reject) =>{
                gapi.load("picker", (callback) => resolve(callback));
            });

            //Use the google pickerbuilder to generate the picker -> 
            return new google.picker.PickerBuilder()
                    //Filters the view for documents
                    .addView(google.picker.ViewId.DOCS)
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey(googleDeveloperKey)
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
            (window.opener as Window).postMessage(relayMessage, window.location.origin);
        }    
    }
}

//Fetches the settings, then starts the picker
fetch("settings.json")
.then(response => response.json())
.then(json => new Kosy.Integration.GoogleDrive.Picker().start(json));