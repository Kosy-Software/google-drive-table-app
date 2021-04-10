/// Messages that are relayed to all of the clients
export type AppMessage =
    | ReceiveGoogleDriveUrl

export interface ReceiveGoogleDriveUrl {
    type: "receive-google-drive-url";
    payload: string;
}

/// Internal component messages
export type ComponentMessage =
    | GoogleDriveValidationHasChanged
    | FilePickerOpened

export interface FilePickerOpened {
    type: "file-picker-opened";
    payload: {};
}

export type GoogleDriveValidationResponse = { url: string, error?: "NotShared" };

export interface GoogleDriveValidationHasChanged {
    type: "google-drive-validation-changed";
    payload: GoogleDriveValidationResponse;
}