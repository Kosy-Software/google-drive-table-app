/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />

import { IntegrationMessage } from "./lib/integrationmessages";
import { IntegrationState } from "./lib/integrationState";
import { KosyToIntegrationMessage, IntegrationToKosyMessage } from './lib/kosymessages';
import { render } from './views/renderState.js';

module Kosy.Integration.GoogleDrive {

    class StartupParameters {}

    export class App {
        private kosyClient: Window;
        private state: IntegrationState = null;
        
        constructor () {
            //TODO: make this into more of a "framework" thing
            //we're initializing this integration for the kosy client (= this window's parent)
            this.kosyClient = window.parent;
            if (!this.kosyClient) {
                //In stead of throwing, send a "kill the integration" message?
                throw "This page is not meant to be ran stand-alone...";
            }
        }

        //Starts the integration
        public start (params: StartupParameters): void {
            //This sets up the message listener, the most important part of every integration
            window.addEventListener("message", (event: MessageEvent<KosyToIntegrationMessage<IntegrationState, IntegrationMessage>>) => {
                this.receiveMessage(event.data);
            });
            //This sends the "ready and listening" message so the kosy client knows the integration has started properly
            this.sendMessage({ type: "ready-and-listening", payload: {} });
        }

        //Messages that flow to the main app get processed here
        //Note: For larger apps a separate message processor class might be required, but for this perticular app, that might be overengineering
        public receiveMessage (message: KosyToIntegrationMessage<IntegrationState, IntegrationMessage>) {
            switch (message.type) {
                case "receive-initial-info":
                    //Sets up the initial information.
                    //For the google drive integration, it's important to know who started it, so we add it to the global state
                    let payload = message.payload;
                    this.state = {
                        googleDriveUrl: payload.currentIntegrationState?.googleDriveUrl,
                        initializer: payload.clients[message.payload.initializerClientUuid],
                        currentClient: payload.clients[message.payload.currentClientUuid]
                    }
                    this.log("Received initialization info: ", message.payload);
                    this.render()
                    break;
                case "receive-message":
                    //A message was received from the kosy client -> process it
                    this.log("Received integration message: ", message.payload);
                    this.processIntegrationMessage(message.payload);
                    break;
                case "client-has-joined":
                    //No need to process this for this app
                    this.log("A client has joined: ", message.payload);
                    break;
                case "client-has-left":
                    //No need to process this for this app
                    this.log("A client has left: ", message.payload);
                    break;
                case "request-integration-state":
                    //Ping - pong
                    this.log("Received request for integration state");
                    this.sendMessage({ type: "receive-integration-state", payload: this.state });
                    break;
                default:
                    break;
            }
        }

        private processIntegrationMessage (message: IntegrationMessage) {
            switch (message.type) {
                case "receive-google-drive-changed":
                    this.state.googleDriveUrl = message.payload;
                    this.render();
                    break;
                case "google-drive-changed":
                    this.sendMessage({ type: "relay-message", payload: { type: "receive-google-drive-changed", payload: message.payload } });
                    break;
                case "file-picker-closed":
                    if (this.state.googleDriveUrl) break;

                    this.log(JSON.stringify(message));
                    //If no file was picked and the file picker was closed or canceled -> self-end the integration
                    if (message.payload.googleDriveUrl) {
                        this.log("Google drive url picked: ", message.payload.googleDriveUrl);
                        this.state.googleDriveUrl = message.payload.googleDriveUrl;
                        this.sendMessage({ type: "relay-message", payload: { type: "receive-google-drive-changed", payload: message.payload.googleDriveUrl } });                        
                    } else {
                        this.log("No google drive url picked, ending integration");
                        this.sendMessage({ type: "end-integration", payload: {} });
                    }
                    break;
                case "file-picker-opened":
                    this.log("The file picker was opened");

                    let popupWindow = (url: string, window: Window, width: number, height: number) => {
                        const centerWindowY = window.outerHeight / 2 + window.screenY - ( height / 2);
                        const centerWindowX = window.outerWidth / 2 + window.screenX - ( width / 2);
                        return window.open(url, "_blank", `fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${width},height=${height},top=${centerWindowY},left=${centerWindowX}`);
                    }

                    var picker = popupWindow("picker.html", window, 1024, 1024);
                    //If it's good enough for facebook, it's good enough for us :D
                    var timer = setInterval(() => {
                        if (picker.closed) {
                            clearInterval(timer);
                            this.processIntegrationMessage({ type: "file-picker-closed", payload: {} });
                        }
                    }, 1000);    
                    break;
                default:
                    break;
            }
        }


        //Sends a message to the kosy client
        public sendMessage (message: IntegrationToKosyMessage<IntegrationState, IntegrationMessage>) {
            //TODO: fix message origin, we probably only want to send messages to a certain url?
            this.kosyClient.postMessage(message, "*");
        }

        //Poor man's react, so we don't need to fetch the entire react library for this tiny app...
        private render () {
            render(this.state, (message) => this.processIntegrationMessage(message));
        }

        private log (...message: any) {
            console.log(`${this.state?.currentClient?.clientName} logged: `, ...message);
        }
    }
}

new Kosy.Integration.GoogleDrive.App().start({});