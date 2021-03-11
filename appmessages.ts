export interface GoogleDriveUrlHasChanged {
    type: "google-drive-changed";
    payload: string;
}

export type GoogleDriveIntegrationMessage =
    | GoogleDriveUrlHasChanged