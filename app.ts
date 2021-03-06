/// <reference path="messages.d.ts" />

module Kozy {
    class StartupParameters {}

    export class GoogleDriveIntegration {
        private kozyTable: Window;
        private googleInput: HTMLInputElement;
        private googleClick: HTMLButtonElement;

        public sendOutgoingMessage (message: ClientToServerMessage) {
            this.kozyTable.postMessage(message, "*");
        }

        public receiveIncomingMessage (message: ServerToClientMessage) {
            switch (message.type) {
                case "HostHasChanged":
                    alert("The host has changed.");
                    break;
                case "ReceiveClientInfo":
                    alert("Client info.");
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
            window.addEventListener("message", (event: MessageEvent<ServerToClientMessage>) => {
                this.receiveIncomingMessage(event.data);
            });
            this.sendOutgoingMessage({ type: "ReadyAndListening", payload: "google-drive-integration" });
        }
    }
}

new Kozy.GoogleDriveIntegration().start({});