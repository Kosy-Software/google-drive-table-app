/// Messages that are relayed to all of the clients
export type AppMessage =
    | ReceiveGoogleDriveUrl

export interface ReceiveGoogleDriveUrl {
    type: "receive-google-drive-url";
    payload: string;
}