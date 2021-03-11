export interface FilePicked {
    type: "file-picked",
    payload: string
}

export interface FilePickerCanceled {
    type: "file-picker-canceled",
    payload: {}
}

export interface FilePickerClosed {
    type: "file-picker-closed",
    payload: {}
}

export type FilePickerMessage = 
    | FilePicked 
    | FilePickerCanceled 
    | FilePickerClosed