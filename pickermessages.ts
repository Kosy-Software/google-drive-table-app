export type FilePickerMessage = 
    | FilePicked 
    | FilePickerClosed

export interface FilePicked {
    type: "file-picked",
    payload: string
}

export interface FilePickerClosed {
    type: "file-picker-closed",
    payload: {}
}