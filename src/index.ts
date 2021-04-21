/// <reference types="@types/google.picker" />
/// <reference types="@types/gapi" />
import './styles/style.scss';

import { AppMessage, ComponentMessage, GoogleDriveValidationResponse as GoogleDriveValidationResponse } from './lib/appMessages';
import { AppState } from './lib/appState';
import { render } from './views/renderState';
import { openPopup } from './lib/openPopup';
import { ClientInfo } from '@kosy/kosy-app-api/types';
import { KosyApi } from '@kosy/kosy-app-api';

module Kosy.Integration.GoogleDrive {
    export class App {
        private state: AppState = { googleDriveUrl: null };
        private initializer: ClientInfo;
        private currentClient: ClientInfo;
        private validationResponse: GoogleDriveValidationResponse;

        private kosyApi = new KosyApi<AppState, AppMessage>({
            onClientHasJoined: (client) => this.onClientHasJoined(client),
            onClientHasLeft: (clientUuid) => this.onClientHasLeft(clientUuid),
            onReceiveMessage: (message) => { this.processMessage(message) },
            onRequestState: () => this.getState(),
            onProvideState: (newState: AppState) => this.setState(newState)
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

        public setState(newState: AppState) {
            this.state = newState;
            this.renderComponent();
        }

        //For this app, it's not important to know who's at the table
        public onClientHasJoined(client: ClientInfo) {
        }


        //If no google drive url has been picked, and the initializer is gone -> end the integration
        //Otherwise, ignore.
        public onClientHasLeft(clientUuid: string) {
            if (clientUuid === this.initializer.clientUuid && !this.state.googleDriveUrl) {
                this.kosyApi.stopApp();
            }
        }

        //Process the message that was sent via the kosy network
        public async processMessage(message: AppMessage) {
            switch (message.type) {
                case "receive-google-drive-url":
                    this.log("Received a message from Kosy: ", message);
                    this.state.googleDriveUrl = message.payload;
                    await this.renderComponent();
                    break;
            }
        }        

        //Process messages that were delegated via the different app components
        private async processComponentMessage (message: ComponentMessage) {
            switch (message.type) {
                case "file-picker-opened":
                    this.log("Open the file picker");
                    //Opens the google drive file picker
                    openPopup ("picker.html", {
                        width: 1024,
                        height: 1024
                    });
                    break;
                case "google-drive-validation-changed":
                    let result = message.payload;
                    this.validationResponse = result;
                    result.error ? this.renderComponent() : this.kosyApi.relayMessage({ type: "receive-google-drive-url", payload: result.url })
                    break;
                default:
                    break;
            }
        }

        //Poor man's react, so we don't need to fetch the entire react library for this tiny app...
        private async renderComponent () {
            render({
                googleDriveUrl: this.state.googleDriveUrl, 
                currentClient: this.currentClient,
                initializer: this.initializer,
                validationResponse: this.validationResponse ?? { url: "" }
            }, (message) => this.processComponentMessage(message));
        }

        //The reason we pulled this out, is because it's easy to change the logging to e.g. console.debug, console.trace, console.table, etc. etc.
        private log (...message: any) {
            console.log(`${this.currentClient?.clientName ?? "New user"} logged: `, ...message);
        }
    }

    new App().start();
}