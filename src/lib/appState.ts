import { ClientInfo } from '@kosy/kosy-app-api/types';
import { GoogleDriveValidationResponse } from './appMessages';

export interface AppState {
    googleDriveUrl?: string;
}

export interface ComponentState extends AppState {
    /// Immutable, represents the parent kosy client
    currentClient: ClientInfo;
    /// Immutable, represents the kosy client that started the app
    initializer: ClientInfo;
    /// Validation response
    validationResponse: GoogleDriveValidationResponse;
}