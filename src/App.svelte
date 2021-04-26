<script lang="ts">
    import type { AppMessage } from './lib/appMessages';
    import type { AppState } from './lib/appState';
    import type { ClientInfo, InitialInfo } from '@kosy/kosy-app-api/types';
    import { KosyApi } from '@kosy/kosy-app-api';
    import { getUserIsSignedIntoGoogle } from './lib/googleDrive';

    import Viewing from "./components/Viewing.svelte";
    import Picking from "./components/Picking.svelte";
    import Waiting from "./components/Waiting.svelte";

    let state: AppState = { googleDriveUrl: null };
    let initializer: ClientInfo;
    let currentClient: ClientInfo;
    let currentUserIsSignedIntoGoogle: boolean = false;

    let kosyApi = new KosyApi<AppState, AppMessage>({
        onClientHasJoined: (client) => onClientHasJoined(client),
        onClientHasLeft: (clientUuid) => onClientHasLeft(clientUuid),
        onReceiveMessage: (message) => { processMessage(message) },
        onRequestState: () => getState(),
        onProvideState: (newState: AppState) => setState(newState)
    })
    
    //There are no assets to pre-load, we can notify kosy that the app has started right away :)
    kosyApi.startApp().then(async (initialInfo: InitialInfo<AppState>) => {
        //Determine if the current user is signed into google
        currentUserIsSignedIntoGoogle = await getUserIsSignedIntoGoogle()
        
        //For this app, it's important to know who initialized the app
        initializer = initialInfo.clients[initialInfo.initializerClientUuid];
        currentClient = initialInfo.clients[initialInfo.currentClientUuid];
        
        //If this is the first client, the currentAppState will be empty. 
        //Don't set the state but use the default one
        state = initialInfo.currentAppState ?? state;
    })

    //Simplest to implement -> just return the current state
    function getState() {
        return state;
    }

    function setState(newState: AppState) {
        state = newState;
    }

    //For this app, it's not important to know who's at the table
    function onClientHasJoined(client: ClientInfo) {}

    //If no google drive url has been picked, and the initializer is gone -> end the integration
    //Otherwise, ignore.
    function onClientHasLeft(clientUuid: string) {
        if (clientUuid === initializer.clientUuid && !state.googleDriveUrl) {
            kosyApi.stopApp();
        }
    }

    //Process the message that was sent via the kosy network
    function processMessage(message: AppMessage) {
        switch (message.type) {
            case "receive-google-drive-url":
                log("Received a message from Kosy: ", message);
                state.googleDriveUrl = message.payload;
                break;
        }
    }        

    let driveUrlPicked = (driveUrl: string) => {
        //TODO: Add validation here.
        log("Relaying message: drive url picked", driveUrl);
        kosyApi.relayMessage({ type: "receive-google-drive-url", payload: driveUrl });
    }

    let refreshSignedInWithGoogle = async () => {
        log("Signed in with google -> refreshing views if necessary");
        currentUserIsSignedIntoGoogle = await getUserIsSignedIntoGoogle();
    }

    //The reason we pulled this out, is because it's easy to change the logging to e.g. console.debug, console.trace, console.table, etc. etc.
    function log (...message: any) {
        console.log(`${currentClient?.clientName ?? "New user"} logged: `, ...message);
    }
</script>

{#if initializer && currentClient}
    {#if state.googleDriveUrl && currentUserIsSignedIntoGoogle}
        <Viewing url={state.googleDriveUrl} />
    {:else if currentClient.clientUuid == initializer.clientUuid && currentUserIsSignedIntoGoogle}
        <Picking on:picked={(event) => driveUrlPicked(event.detail)} />
    {:else}
        <Waiting {initializer} {currentClient} {currentUserIsSignedIntoGoogle} on:signed-in={() => refreshSignedInWithGoogle()} />
    {/if}
{/if}