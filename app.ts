/// <reference path="messages.d.ts" />

module Kozy {
    class StartupParameters {}

    type GoogleDriveIntegrationMessage = any //placeholder

    export class GoogleDriveIntegration {
        private kozyTable: Window;
        private myClientInfo: ClientInfo;
        private googleInput: HTMLInputElement;
        private googleClick: HTMLButtonElement;

        public sendOutgoingMessage (message: ClientToServerMessage<GoogleDriveIntegrationMessage>) {
            this.kozyTable.postMessage(message, "*");
        }

        private processIncomingMessage(message: GoogleDriveIntegrationMessage) {
            //placeholder
        }

        public receiveIncomingMessage (message: ServerToClientMessage<GoogleDriveIntegrationMessage>) {
            switch (message.type) {
                case "ReceiveClientInfo":
                    alert("My client info: " + JSON.stringify(message.payload));
                    this.myClientInfo = message.payload;
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
            this.googleInput = document.getElementById("google-input") as HTMLInputElement;
            this.googleClick = document.getElementById("google-button") as HTMLButtonElement;
        }

        public start (params: StartupParameters): void {
            window.addEventListener("message", (event: MessageEvent<ServerToClientMessage<GoogleDriveIntegrationMessage>>) => {
                this.receiveIncomingMessage(event.data);
            });
            this.sendOutgoingMessage({ type: "ReadyAndListening", payload: {} });
        }
    }
}

window.onload = () => {
    new Kozy.GoogleDriveIntegration().start({});
}