import { ClientInfo } from './kosyclient';

export interface IntegrationState {
    googleDriveUrl: string;
    currentClient: ClientInfo;
    initializer: ClientInfo;
}