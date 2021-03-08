/// <reference path="messages.d.ts" />

module Kozy {
    class StartupParameters {}

    type GoogleDriveUrlHasChanged = {
        type: "GoogleDriveUrlHasChanged";
        payload: string;
    }

    type GoogleDriveIntegrationMessage =
        | GoogleDriveUrlHasChanged

    export class GoogleDriveIntegration {
        private kozyTable: Window;
        private currentClient: ClientInfo;
        private initializer: ClientInfo;

        public sendOutgoingMessage (message: ClientToServerMessage<GoogleDriveIntegrationMessage>) {
            this.kozyTable.postMessage(message, "*");
        }

        private processIncomingMessage(message: GoogleDriveIntegrationMessage) {
            switch (message.type) {
                case "GoogleDriveUrlHasChanged":
                    document.getElementById("picking").hidden = true;
                    document.getElementById("waiting").hidden = true; 
                    let iframe = document.getElementById("viewing") as HTMLIFrameElement;
                    //TODO: verify if it's a valid google docs url -> if not -> discard message
                    iframe.src = message.payload;
                    iframe.hidden = false;
            }
        }

        public receiveIncomingMessage (message: ServerToClientMessage<GoogleDriveIntegrationMessage>) {
            switch (message.type) {
                case "ReceiveInitialInfo":
                    alert("Received initialization info: " + JSON.stringify(message.payload));
                    this.currentClient = message.payload.currentClient;
                    this.initializer = message.payload.initializer;
                    if (this.currentClient.clientUuid == this.initializer.clientUuid) {
                        document.getElementById("picking").hidden = false;
                        document.getElementById("google-input").onchange = (event: Event) => {
                            //First draft -> needs fine-tuning
                            let url = (event.currentTarget as HTMLInputElement).value;
                            this.sendOutgoingMessage({ 
                                type: "RelayMessage", 
                                payload: { type: "GoogleDriveUrlHasChanged", payload: url } 
                            });
                        }
                        document.getElementById("google-button").onchange = (event: Event) => {
                            //Start google drive document picker
                        }
                    } else {
                        document.getElementById("waiting").hidden = false;
                    }
                    break;
                case "ReceiveMessage":
                    this.processIncomingMessage(message.payload);
                    break;
                case "ClientHasJoined":
                    //ignore
                    break;
                case "ClientHasLeft":
                    //ignore
                    break;
                default:
                    console.log("An unexpected message was received: " + JSON.stringify(message));
                    break;
            }
        }

        constructor () {
            this.kozyTable = window.parent;    
            if (!this.kozyTable) {
                alert("This page is not meant to be ran stand-alone...");
                throw "This page is not meant to be ran stand-alone...";
            }
        }

        public start (params: StartupParameters): void {
            window.addEventListener("message", (event: MessageEvent<ServerToClientMessage<GoogleDriveIntegrationMessage>>) => {
                this.receiveIncomingMessage(event.data);
            });
            this.sendOutgoingMessage({ type: "ReadyAndListening", payload: {} });
        }
    }
}

new Kozy.GoogleDriveIntegration().start({});