import { FilePickerMessage } from './pickermessages';

module Kosy {
    const developerKey = "AIzaSyCSV8-5iNEVGubHa83iskEhwSbkO0nBmEk";
    const client_id = "1055348097262-umvi6mnq47jh9d6io4ha1s49e4hln03p.apps.googleusercontent.com";

    export class GoogleDrivePicker {
        private sendOutgoingMessage (relayMessage: FilePickerMessage) {
            (window.opener as Window).postMessage(relayMessage, "*");
        }

        public async start() {
            await new Promise((resolve, reject) => {
                gapi.load("client:auth2", (callback) => { console.debug("Auth should have been loaded."); resolve(callback); });
            });
            await gapi.client.init({
                clientId: client_id,
                scope: "https://www.googleapis.com/auth/drive.file"
            });
            let authResult: GoogleApiOAuth2TokenObject = gapi.client.getToken();
            let oauthToken = authResult && !authResult.error ? authResult.access_token : "";
            await new Promise ((resolve, reject) =>{
                gapi.load("picker", (callback) => resolve(callback));
            });
            var builder = new google.picker.PickerBuilder();
            let picker =
                builder
                    .addView(google.picker.ViewId.DOCS)
                    .enableFeature(google.picker.Feature.NAV_HIDDEN)
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey(developerKey)
                    .setCallback((data: any) => {
                        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                            let doc = data[google.picker.Response.DOCUMENTS][0];
                            let url = doc[google.picker.Document.EMBEDDABLE_URL];
                            this.sendOutgoingMessage({ type: "file-picked", payload: url });
                            window.close();
                        } 
                        if (data[google.picker.Response.ACTION] == google.picker.Action.CANCEL) {
                            this.sendOutgoingMessage({ type: "file-picker-canceled", payload: {} });
                            window.close();
                        }
                    })
                    .hideTitleBar()
                    .setOrigin("http://local.dev.com:5500")
                    .build();
            picker.setVisible(true);
        }
    }

}

new Kosy.GoogleDrivePicker().start();