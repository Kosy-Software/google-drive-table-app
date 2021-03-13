import { FilePickerMessage } from './pickermessages';

export type IntegrationMessage =
    | ReceiveGoogleDriveUrlHasChanged
    | GoogleDriveUrlHasChanged
    | FilePickerMessage

export interface ReceiveGoogleDriveUrlHasChanged {
    type: "receive-google-drive-changed";
    payload: string;
}

export interface GoogleDriveUrlHasChanged {
    type: "google-drive-changed";
    payload: string;
}