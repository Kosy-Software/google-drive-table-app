/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />
import './styles/style.scss';

import { AppMessage, ComponentMessage } from './lib/appMessages';
import { AppState } from './lib/appState';
import { render } from './views/renderState';
import { openPopup } from './lib/openPopup';
import { isValidGoogleDriveUrl } from './lib/validation';
import { ClientInfo } from '@kosy/kosy-app-api/types';
import { KosyAppProxy } from '@kosy/kosy-app-api';

module Kosy.Integration.GoogleDrive {
    export class App {
        private kosyApi = new KosyAppProxy<AppState, AppMessage>({
            onClientHasJoined: (client) => this.onClientHasJoined(client),
            onClientHasLeft: (client) => this.onClientHasLeft(client),
            onReceiveMessage: (message) => this.processMessage(message),
            onRequestState: () => this.getState()
        })
        private state: AppState = { googleDriveUrl: null };
        private initializer: ClientInfo;
        private currentClient: ClientInfo;

        public async start() {
            let initialInfo = await this.kosyApi.startApp();
            this.initializer = initialInfo.clients[initialInfo.initializerClientUuid];
            this.currentClient = initialInfo.clients[initialInfo.currentClientUuid];
            this.state = initialInfo.currentIntegrationState ?? this.state;
            this.renderComponent();
        }

        public getState() {
            return this.state;
        }

        public onClientHasJoined(client: ClientInfo) {
            //No need to process this message for this app
        }

        public onClientHasLeft(client: ClientInfo) {
            //If no google drive url has been picked, and the initializer is gone -> end the integration
            if (client.clientUuid === this.initializer.clientUuid && !this.state.googleDriveUrl) {
                this.kosyApi.stopApp();
            }
        }

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
                        this.processComponentMessage({ type: "google-drive-url-changed", payload: message.payload.googleDriveUrl });
                    } else {                        
                        this.log("No google drive url picked, ending integration");
                        this.kosyApi.stopApp();
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

        //Poor man's react, so we don't need to fetch the entire react library for this tiny app...
        private renderComponent () {
            render({
                googleDriveUrl: this.state.googleDriveUrl, 
                currentClient: this.currentClient,
                initializer: this.initializer
            }, (message) => this.processComponentMessage(message));
        }

        private log (...message: any) {
            console.log(`${this.currentClient?.clientName ?? "New user"} logged: `, ...message);
        }
    }

    new App().start();
}