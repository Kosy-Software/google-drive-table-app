import type { ClientInfo, InitialInfo } from '@kosy/kosy-app-api/types';
import { Writable, writable, Readable, derived } from 'svelte/store';
import type { AppState } from './lib/appState';

export const initialInfo: Writable<InitialInfo<AppState>> = writable(null);
export const initializer: Readable<ClientInfo> = derived(
    initialInfo,
    initialInfo => initialInfo?.clients[initialInfo.initializerClientUuid]
);
export const currentClient: Readable<ClientInfo> = derived(
    initialInfo,
    initialInfo => initialInfo?.clients[initialInfo.currentClientUuid]
);