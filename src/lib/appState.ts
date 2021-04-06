import { ClientInfo } from '@kosy/kosy-app-api/types';

export interface AppState {
    /// This state is only set once in this app
    googleDriveFileId?: string;
}

export interface ComponentState extends AppState {
    /// Immutable, represents the parent kosy client
    currentClient: ClientInfo;
    /// Immutable, represents the kosy client that started the app
    initializer: ClientInfo;
    /// An url to the google drive file
    googleDriveUrl: string;
}