export type PickedEvent = {
    "picked": string;
}

export type CreatedEvent = {
    "created": string;
    "canceled": unknown;
}

export type SignedInEvent = {
    "signed-in": any;
}

export interface GoogleDriveUrlPicked {
    type: "google-drive-url-picked";
    payload: { url: string, error?: "NotShared" };
}