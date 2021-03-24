/// Messages that are relayed to all of the clients
export type AppMessage =
    | ReceiveGoogleDriveUrl

export interface ReceiveGoogleDriveUrl {
    type: "receive-google-drive-url";
    payload: string;
}

/// Internal component messages
export type ComponentMessage =
    | GoogleDriveUrlHasChanged
    | FilePickerMessage

export interface GoogleDriveUrlHasChanged {
    type: "google-drive-url-changed";
    payload: string;
}

export type FilePickerMessage = 
    | FilePickerClosed
    | FilePickerOpened

export interface FilePickerClosed {
    type: "file-picker-closed";
    payload: { googleDriveUrl?: string; };
}

export interface FilePickerOpened {
    type: "file-picker-opened";
    payload: {};
}