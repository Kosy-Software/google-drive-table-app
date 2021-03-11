/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />

import { ClientInfo, ServerToClientMessage, ClientToServerMessage } from './framework';
import { FilePickerMessage } from './pickermessages';

module Kosy {
    class StartupParameters {}

    type GoogleDriveUrlHasChanged = {
        type: "google-drive-changed";
        payload: string;
    }

    type GoogleDriveIntegrationMessage =
        | GoogleDriveUrlHasChanged

    export class GoogleDriveIntegration {
        private kosyTable: Window;
        private currentClient: ClientInfo;
        private initializer: ClientInfo;
        private fileWasPicked: boolean;
        
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
                    iframe.src = message.payload;
                    iframe.style.width = "100%";
                    iframe.style.height = this.kosyTable[0].innerHeight - 30 + "px";
                    iframe.hidden = false;
            }
        }

        public receiveIncomingMessage (message: FilePickerMessage | ServerToClientMessage<GoogleDriveIntegrationMessage>) {
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
                            var picker = window.open("picker.html", "_blank", "fullscreen=1,menubar=0,location=0,directories=0,toolbar=0,titlebar=0");
                            var timer = setInterval(() => { 
                                if(picker.closed) {
                                    clearInterval(timer);
                                    this.receiveIncomingMessage({ type: "file-picker-closed", payload: {} });
                                }
                            }, 1000);
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
                case "file-picked":
                    //TODO: validate file's url
                    this.sendOutgoingMessage({ type: "relay-message", payload: { type: "google-drive-changed", payload: message.payload } });
                    this.fileWasPicked = true;
                    break;
                case "file-picker-closed":
                case "file-picker-canceled":
                    if (!this.fileWasPicked) {
                        //TODO: send close integration
                        alert("No file was picked, shutting down integration...");
                        break;
                    }
                default:
                    break;
            }
        }

        constructor () {
            this.kosyTable = window.parent;    
            if (!this.kosyTable) {
                throw "This page is not meant to be ran stand-alone...";
            }
            this.fileWasPicked = false;
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