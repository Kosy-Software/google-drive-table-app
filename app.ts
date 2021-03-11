/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />

import { ClientInfo, KosyToIntegrationMessage, IntegrationToKosyMessage } from './framework';
import { FilePickerMessage } from './pickermessages';
import { GoogleDriveIntegrationMessage } from "./appmessages";

module Kosy {
    class StartupParameters {}

    export class GoogleDriveIntegration {
        private kosyClient: Window;
        private currentClient: ClientInfo;
        private initializer: ClientInfo;
        private fileWasPicked: boolean = false;
        
        constructor () {
            //TODO: make this into more of a "framework" thing
            //we're initializing this integration for the kosy client (= this window's parent)
            this.kosyClient = window.parent;
            if (!this.kosyClient) {
                //In stead of throwing, send a "kill the integration" message?
                throw "This page is not meant to be ran stand-alone...";
            }
        }

        private log (...message: any) {
            console.log(`${this.currentClient.clientName} logged: "`, ...message);
        }

        //Sends a message to the kosy client
        public sendMessage (message: IntegrationToKosyMessage<GoogleDriveIntegrationMessage>) {
            this.kosyClient.postMessage(message, "*");
        }

        //Processes a message that came in via the kosy client
        private processIntegrationMessage(message: GoogleDriveIntegrationMessage) {
            switch (message.type) {
                case "google-drive-changed":
                    document.getElementById("picking").hidden = true;
                    document.getElementById("waiting").hidden = true; 
                    let iframe = document.getElementById("viewing") as HTMLIFrameElement;
                    iframe.src = message.payload;
                    iframe.style.width = "100%";
                    iframe.style.height = `${this.kosyClient[0].innerHeight - 30}px`;
                    iframe.hidden = false;
                    break;
                default:
                    break;
            }
        }

        //Opens the google drive picker in a new window
        private openGoogleDrivePicker () {
            let picker = document.getElementById("picking");
            picker.hidden = false;

            //This sets up the google input element -> on input changed -> relay a message
            document.getElementById("google-input").oninput = (event: Event) => {
                //First draft -> google drive url needs to be validated, for now, this just accepts everything
                let url = (event.currentTarget as HTMLInputElement).value;
                this.sendMessage({ 
                    type: "relay-message", 
                    payload: { type: "google-drive-changed", payload: url } 
                });
            }

            //This sets up the onclick for the "Click me to view google drive" button
            document.getElementById("google-button").onclick = async (event: Event) => {
                this.log("Picker started")
                var picker = window.open("picker.html", "_blank", "fullscreen=1,menubar=0,location=0,directories=0,toolbar=0,titlebar=0");
                //If it's good enough for facebook, it's good enough for us :D
                var timer = setInterval(() => {
                    if(picker.closed) {
                        this.log("Picker closed")
                        clearInterval(timer);
                        this.receiveMessage({ type: "file-picker-closed", payload: {} });
                    }
                }, 1000);
            }
        }

        //Shows "<username> is picking a file"
        private showWaiting() {
            let waitingElement = document.getElementById("waiting");
            waitingElement.innerHTML = `${this.initializer.clientName} is picking a file`;
            waitingElement.hidden = false;
        }

        //Messages that flow to the main app get processed here
        //Note: For larger apps a separate message processor class might be required, but for this perticular app, that might be overengineering
        public receiveMessage (message: FilePickerMessage | KosyToIntegrationMessage<GoogleDriveIntegrationMessage>) {
            switch (message.type) {
                case "receive-initial-info":
                    //Sets up the initial information, for the google drive integration, it's important to know who started it
                    this.currentClient = message.payload.clients[message.payload.currentClientUuid];
                    this.initializer = message.payload.clients[message.payload.initializerClientUuid];
                    this.log("Received initialization info: ", message.payload);
                    if (this.currentClient.clientUuid == this.initializer.clientUuid) {
                        this.openGoogleDrivePicker();
                    } else {
                        this.showWaiting();
                    }
                    break;
                case "receive-message":
                    //A message was received from the kosy client -> process it
                    this.log("Received message: ", message.payload);
                    this.processIntegrationMessage(message.payload);
                    break;
                case "client-has-joined":
                    //TODO?
                    this.log("A client has joined: ", message.payload);
                    break;
                case "client-has-left":
                    //TODO?
                    this.log("A client has left: ", message.payload)
                    break;
                case "file-picked":
                    //A file was picked -> send it to the other kosy clients
                    //TODO: validate file's url
                    this.sendMessage({ type: "relay-message", payload: { type: "google-drive-changed", payload: message.payload } });
                    this.fileWasPicked = true;
                    break;
                case "file-picker-closed":
                case "file-picker-canceled":
                    //If no file was picked and the file picker was closed or canceled -> kill the integration
                    if (!this.fileWasPicked) {
                        //TODO: send close integration
                        alert("No file was picked, shutting down integration...");
                        break;
                    }
                default:
                    break;
            }
        }

        //Starts the integration (might be unnecessary, maybe move to the constructor?)
        public start (params: StartupParameters): void {
            //This sets up the message listener, the most important part of every integration
            window.addEventListener("message", (event: MessageEvent<KosyToIntegrationMessage<GoogleDriveIntegrationMessage>>) => {
                this.receiveMessage(event.data);
            });
            //This sends the "ready and listening" message so the kosy client knows the integration has started properly
            this.sendMessage({ type: "ready-and-listening", payload: {} });
        }
    }
}

new Kosy.GoogleDriveIntegration().start({});