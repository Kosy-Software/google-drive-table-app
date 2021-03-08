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

        private log (...message: any) {
            console.log(this.currentClient.clientName + " log: ", ...message);
        }

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
                    iframe.sandbox.value = "";
                    iframe.hidden = false;
            }
        }

        public receiveIncomingMessage (message: ServerToClientMessage<GoogleDriveIntegrationMessage>) {
            switch (message.type) {
                case "ReceiveInitialInfo":
                    this.currentClient = message.payload.currentClient;
                    this.initializer = message.payload.initializer;
                    this.log("Received initialization info: ", message.payload);
                    if (this.currentClient.clientUuid == this.initializer.clientUuid) {
                        let picker = document.getElementById("picking");
                        picker.hidden = false;
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
                        let waitingElement = document.getElementById("waiting");
                        waitingElement.innerHTML = this.initializer.clientName + " is picking a file";
                        waitingElement.hidden = false;
                    }
                    break;
                case "ReceiveMessage":
                    this.log("Received message: ", message.payload);
                    this.processIncomingMessage(message.payload);
                    break;
                case "ClientHasJoined":
                    this.log("A client has joined: ", message.payload);
                    break;
                case "ClientHasLeft":
                    this.log("A client has left: ", message.payload)
                    break;
                default:
                    this.log("An unexpected message was received: ", message);
                    break;
            }
        }

        constructor () {
            this.kozyTable = window.parent;    
            if (!this.kozyTable) {
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