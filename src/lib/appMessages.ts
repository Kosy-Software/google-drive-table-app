/// Messages that are relayed to all of the clients
export type AppMessage =
    | ReceiveGoogleDriveFileId

export interface ReceiveGoogleDriveFileId {
    type: "receive-google-drive-file-id";
    payload: string;
}

/// Internal component messages
export type ComponentMessage =
    | GoogleDriveFileIdHasChanged
    | FilePickerOpened

export interface GoogleDriveFileIdHasChanged {
    type: "google-drive-file-id-changed";
    payload: string;
}

export interface FilePickerOpened {
    type: "file-picker-opened";
    payload: {};
}