/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />

import { IntegrationMessage, ComponentMessage } from './lib/integrationmessages';
import { IntegrationState } from './lib/integrationState';
import { KosyToIntegrationMessage, IntegrationToKosyMessage } from './lib/kosymessages';
import { render } from './views/renderState.js';
import { openPopup } from './openPopup.js';
import { ClientInfo } from './lib/kosyclient';

module Kosy.Integration.GoogleDrive {

    class StartupParameters {}

    export class App {
        private kosyClient: Window = window.parent;
        private state: IntegrationState = { googleDriveUrl: null };
        private initializer: ClientInfo;
        private currentClient: ClientInfo;

        //Starts the integration
        public start (params: StartupParameters): void {
            //This sets up the message listener, the most important part of every integration
            window.addEventListener("message", (event: MessageEvent<KosyToIntegrationMessage<IntegrationState, IntegrationMessage> | ComponentMessage>) => {
                this.receiveMessage(event.data);
            });
            //This sends the "ready and listening" message so the kosy client knows the integration has started properly
            this.sendMessage({ type: "ready-and-listening", payload: {} });
        }

        //Messages that flow to the main app get processed here
        //Note: For larger apps a separate message processor class might be required, but for this perticular app, that might be overengineering
        public receiveMessage (message: KosyToIntegrationMessage<IntegrationState, IntegrationMessage> | ComponentMessage) {
            switch (message.type) {
                case "receive-initial-info":
                    //Sets up the initial information.
                    //For the google drive integration, it's important to know who started it, so we add it to the global state
                    let payload = message.payload;
                    this.initializer = payload.clients[message.payload.initializerClientUuid];
                    this.currentClient = payload.clients[message.payload.currentClientUuid];
                    this.state = payload.currentIntegrationState ?? this.state;
                    this.log("Received initialization info: ", message.payload);
                    this.renderComponent();
                    break;
                case "receive-message":
                    //A message was relayed from another integration client -> process it
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
                    //Minor hack so the picker works properly (it's in a separate window unfortunately)
                    this.processComponentMessage(message);
                    break;
            }
        }

        private processIntegrationMessage (message: IntegrationMessage) {
            switch (message.type) {
                case "receive-google-drive-url":
                    this.state.googleDriveUrl = message.payload;
                    this.renderComponent();
                    break;
            }
        }

        private processComponentMessage (message: ComponentMessage) {
            switch (message.type) {
                case "google-drive-url-changed":
                    //Set the google drive url
                    this.state.googleDriveUrl = message.payload;
                    //Notify all other clients that the google drive url has changed
                    this.sendMessage({ type: "relay-message", payload: { type: "receive-google-drive-url", payload: message.payload } });
                    break;
                case "file-picker-closed":
                    //We're already in a state where we have a google drive url -> ignore the message
                    if (this.state.googleDriveUrl) break;

                    //If the file picker was closed with a google drive url -> 
                    if (message.payload.googleDriveUrl) {
                        this.log("Google drive url picked: ", message.payload.googleDriveUrl);
                        this.processComponentMessage({ type: "google-drive-url-changed", payload: message.payload.googleDriveUrl });
                    } else {                        
                        this.log("No google drive url picked, ending integration");
                        this.sendMessage({ type: "end-integration", payload: {} });
                    }
                    break;
                case "file-picker-opened":
                    this.log("The file picker was opened");

                    openPopup ("picker.html", { 
                        onclose: () => this.processComponentMessage({ type: "file-picker-closed", payload: {} }),
                        width: 1024,
                        height: 1024
                    });
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
        private renderComponent () {
            render({
                googleDriveUrl: this.state.googleDriveUrl, 
                currentClient: this.currentClient,
                initializer: this.initializer
            }, (message) => this.receiveMessage(message));
        }

        private log (...message: any) {
            console.log(`${this.currentClient?.clientName ?? "New user"} logged: `, ...message);
        }
    }
}

new Kosy.Integration.GoogleDrive.App().start({});