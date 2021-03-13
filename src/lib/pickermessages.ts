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