declare namespace Kosy.Integration {
    type GoogleDriveIntegrationMessage =
        | GoogleDriveUrlHasChanged

    interface GoogleDriveUrlHasChanged {
        type: "google-drive-changed";
        payload: string;
    }
}