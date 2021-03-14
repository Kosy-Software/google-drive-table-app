import { ClientInfo } from './kosyclient';

export interface IntegrationState {
    /// This state is only set once in this integration
    googleDriveUrl?: string;
}

export interface ComponentState extends IntegrationState {
    /// Immutable, represents the parent kosy client
    currentClient: ClientInfo;
    /// Immutable, represents the kosy client that started integration
    initializer: ClientInfo;
}