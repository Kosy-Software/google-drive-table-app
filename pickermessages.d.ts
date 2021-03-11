type FilePickerMessage = 
    | FilePicked 
    | FilePickerClosed

interface FilePicked {
    type: "file-picked",
    payload: string
}

interface FilePickerClosed {
    type: "file-picker-closed",
    payload: {}
}