/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />

import { ClientInfo, ServerToClientMessage, ClientToServerMessage } from './framework';

module Kosy {
    class StartupParameters {}

    type GoogleDriveUrlHasChanged = {
        type: "google-drive-changed";
        payload: string;
    }

    type GoogleDriveIntegrationMessage =
        | GoogleDriveUrlHasChanged

    const developerKey = "AIzaSyCSV8-5iNEVGubHa83iskEhwSbkO0nBmEk";
    const client_id = "1055348097262-umvi6mnq47jh9d6io4ha1s49e4hln03p.apps.googleusercontent.com";
    const appId = "1055348097262";

    export class GoogleDriveIntegration {
        private kosyTable: Window;
        private currentClient: ClientInfo;
        private initializer: ClientInfo;

        private log (...message: any) {
            console.log(this.currentClient.clientName + " log: ", ...message);
        }

        public sendOutgoingMessage (message: ClientToServerMessage<GoogleDriveIntegrationMessage>) {
            this.kosyTable.postMessage(message, "*");
        }

        private processIncomingMessage(message: GoogleDriveIntegrationMessage) {
            switch (message.type) {
                case "google-drive-changed":
                    document.getElementById("picking").hidden = true;
                    document.getElementById("waiting").hidden = true; 
                    let iframe = document.getElementById("viewing") as HTMLIFrameElement;
                    //TODO: verify if it's a valid google docs url -> if not -> discard message
                    iframe.src = message.payload;
                    iframe.hidden = false;
                    iframe.width = "670px";
                    iframe.height = "380px";
            }
        }

        public receiveIncomingMessage (message: ServerToClientMessage<GoogleDriveIntegrationMessage>) {
            switch (message.type) {
                case "receive-initial-info":
                    this.currentClient = message.payload.clients[message.payload.currentClientUuid];
                    this.initializer = message.payload.clients[message.payload.initializerClientUuid];
                    this.log("Received initialization info: ", message.payload);
                    if (this.currentClient.clientUuid == this.initializer.clientUuid) {
                        let picker = document.getElementById("picking");
                        picker.hidden = false;
                        document.getElementById("google-input").oninput = (event: Event) => {
                            //First draft -> needs fine-tuning
                            let url = (event.currentTarget as HTMLInputElement).value;
                            this.sendOutgoingMessage({ 
                                type: "relay-message", 
                                payload: { type: "google-drive-changed", payload: url } 
                            });
                        }
                        document.getElementById("google-button").onclick = async (event: Event) => {
                            console.debug("Picker started");
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
                                            this.sendOutgoingMessage({ type: "relay-message", payload: { type: "google-drive-changed", payload: url } });
                                        } else {
                                            //notify: end the integration
                                        }             
                                    })
                                    .hideTitleBar()
                                    .setOrigin("http://local.dev.com:5500")
                                    .build();
                            picker.setVisible(true);
                        }
                    } else {
                        let waitingElement = document.getElementById("waiting");
                        waitingElement.innerHTML = this.initializer.clientName + " is picking a file";
                        waitingElement.hidden = false;
                    }
                    break;
                case "receive-message":
                    this.log("Received message: ", message.payload);
                    this.processIncomingMessage(message.payload);
                    break;
                case "client-has-joined":
                    this.log("A client has joined: ", message.payload);
                    break;
                case "client-has-left":
                    this.log("A client has left: ", message.payload)
                    break;
                default:
                    this.log("An unexpected message was received: ", message);
                    break;
            }
        }

        constructor () {
            this.kosyTable = window.parent;    
            if (!this.kosyTable) {
                throw "This page is not meant to be ran stand-alone...";
            }
        }

        public start (params: StartupParameters): void {
            window.addEventListener("message", (event: MessageEvent<ServerToClientMessage<GoogleDriveIntegrationMessage>>) => {
                this.receiveIncomingMessage(event.data);
            });
            this.sendOutgoingMessage({ type: "ready-and-listening", payload: {} });
        }
    }
}

new Kosy.GoogleDriveIntegration().start({});