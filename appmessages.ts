export type GoogleDriveIntegrationMessage =
    | GoogleDriveUrlHasChanged

export interface GoogleDriveUrlHasChanged {
    type: "google-drive-changed";
    payload: string;
}