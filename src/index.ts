/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />
import './styles/style.scss';

import { AppMessage, ComponentMessage } from './lib/appMessages';
import { AppState } from './lib/appState';
import { render } from './views/renderState';
import { openPopup } from './lib/openPopup';
import { isValidGoogleDriveUrl } from './lib/validation';
import { ClientInfo } from '@kosy/kosy-app-api/types';
import { KosyApi } from '@kosy/kosy-app-api';

module Kosy.Integration.GoogleDrive {
    export class App {
        private state: AppState = { googleDriveUrl: null };
        private initializer: ClientInfo;
        private currentClient: ClientInfo;

        private kosyApi = new KosyApi<AppState, AppMessage>({
            onClientHasJoined: (client) => this.onClientHasJoined(client),
            onClientHasLeft: (client) => this.onClientHasLeft(client),
            onReceiveMessage: (message) => this.processMessage(message),
            onRequestState: () => this.getState()
        })
        public async start() {
            //There are no assets to pre-load, we can notify kosy that the app has started right away :)
            let initialInfo = await this.kosyApi.startApp();

            //For this app, it's important to know who initialized the app
            this.initializer = initialInfo.clients[initialInfo.initializerClientUuid];
            this.currentClient = initialInfo.clients[initialInfo.currentClientUuid];
            
            //If this is the first client, the currentAppState will be empty. 
            //Don't set the state but use the default one
            this.state = initialInfo.currentAppState ?? this.state;

            //The state was loaded -> render it
            this.renderComponent();

            //Might not be the best way of handling the google picker's popup message -> but it works well enough...
            window.addEventListener("message", (event: MessageEvent<ComponentMessage>) => {
                this.processComponentMessage(event.data)
            });
        }

        //Simplest to implement -> just return the current state
        public getState() {
            return this.state;
        }

        //For this app, it's not important to know who's at the table
        public onClientHasJoined(client: ClientInfo) {
        }


        //If no google drive url has been picked, and the initializer is gone -> end the integration
        //Otherwise, ignore.
        public onClientHasLeft(client: ClientInfo) {
            if (client.clientUuid === this.initializer.clientUuid && !this.state.googleDriveUrl) {
                this.kosyApi.stopApp();
            }
        }

        //Process the message that was sent via the kosy network
        public processMessage(message: AppMessage) {
            switch (message.type) {
                case "receive-google-drive-url":
                    if (isValidGoogleDriveUrl(message.payload)) {
                        this.state.googleDriveUrl = message.payload;
                        this.renderComponent();
                    }
                    break;
            }
        }

        //Process messages that were delegated via the different app components
        private processComponentMessage (message: ComponentMessage) {
            switch (message.type) {
                case "google-drive-url-changed":
                    //Notify all other clients that the google drive url has changed
                    this.kosyApi.relayMessage({ type: "receive-google-drive-url", payload: message.payload });
                    break;
                case "file-picker-closed":
                    //We're already in a state where we have a google drive url -> ignore the message
                    if (this.state.googleDriveUrl) break;

                    //If the file picker was closed with a google drive url -> 
                    if (message.payload.googleDriveUrl) {
                        this.log("Google drive url picked: ", message.payload.googleDriveUrl);
                        this.state.googleDriveUrl = message.payload.googleDriveUrl;
                        this.processComponentMessage({ type: "google-drive-url-changed", payload: message.payload.googleDriveUrl });
                    } else {                        
                        this.log("No google drive url picked, ending integration");
                        this.kosyApi.stopApp();
                    }
                    break;
                case "file-picker-opened":
                    //Opens the google drive file picker
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

        //Poor man's react, so we don't need to fetch the entire react library for this tiny app...
        private renderComponent () {
            render({
                googleDriveUrl: this.state.googleDriveUrl, 
                currentClient: this.currentClient,
                initializer: this.initializer
            }, (message) => this.processComponentMessage(message));
        }

        //The reason we pulled this out, is because it's easy to change the logging to e.g. console.debug, console.trace, console.table, etc. etc.
        private log (...message: any) {
            console.log(`${this.currentClient?.clientName ?? "New user"} logged: `, ...message);
        }
    }

    new App().start();
}