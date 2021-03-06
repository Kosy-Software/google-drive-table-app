module Kozy {
    type HostHasChanged = {
        type: "HostHasChanged"
        payload: any
    }

    type ReceiveClientInfo = {
        type: "ReceiveClientInfo"
        payload: any
    }

    type ReadyAndListening = {
        type: "ReadyAndListening"
        payload: any
    }

    type RelayToHost = {
        type: "RelayToHost"
        payload: any
    }

    type RelayToAllClients = {
        type: "RelayToAllClients"
        payload: any
    }

    type IncomingSystemMessage =
        | HostHasChanged
        | ReceiveClientInfo

    type OutgoingSystemMessage =
        | ReadyAndListening
        | RelayToHost
        | RelayToAllClients

    class StartupParameters {}

    export class GoogleDriveIntegration {
        private opener: Window;
        private googleInput: HTMLInputElement;
        private googleClick: HTMLButtonElement;

        public sendOutgoingMessage (message: OutgoingSystemMessage) {
            this.opener.postMessage(message, "*");
        }

        public receiveIncomingMessage (message: IncomingSystemMessage) {
            switch (message.type) {
                case "HostHasChanged":
                    alert("The host has changed.");
                case "ReceiveClientInfo":
                    alert("Client info.")
            }
        }

        constructor () {
            this.opener = window.opener;    
            if (!this.opener) {
                alert("This page is not meant to be ran stand-alone...");
                throw "This page is not meant to be ran stand-alone...";
            }
            this.googleInput = document.getElementById("google-input") as HTMLInputElement;
            this.googleClick = document.getElementById("google-button") as HTMLButtonElement;
        }

        public start (params: StartupParameters): void {
            window.addEventListener("message", (event: MessageEvent<IncomingSystemMessage>) => {
                this.receiveIncomingMessage(event.data);
            });
            this.sendOutgoingMessage({ type: "ReadyAndListening", payload: "google-drive-integration" });
        }
    }
}

new Kozy.GoogleDriveIntegration().start({});