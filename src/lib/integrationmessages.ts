import { FilePickerMessage } from './pickermessages';

/// Messages that are relayed to all of the clients
export type IntegrationMessage =
    | ReceiveGoogleDriveUrl

/// Internal component messages
export type ComponentMessage =
    | GoogleDriveUrlHasChanged
    | FilePickerMessage

export interface ReceiveGoogleDriveUrl {
    type: "receive-google-drive-url";
    payload: string;
}

export interface GoogleDriveUrlHasChanged {
    type: "google-drive-url-changed";
    payload: string;
}