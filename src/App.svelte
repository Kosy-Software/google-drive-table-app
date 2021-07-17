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

    let kosyApi = new KosyApi<AppState, AppMessage, AppMessage>({
        onClientHasLeft: (clientUuid) => onClientHasLeft(clientUuid),
        onReceiveMessageAsHost: message => message,
        onReceiveMessageAsClient: (message) => { processMessage(message) },
        onRequestState: () => getState(),
        onProvideState: (newState: AppState) => setState(newState)
    });

    //Times out after 3 seconds to show a loading screen if necessary
    let showLoadingPromise: Promise<void> = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(); }, 3000);
    });

    //There are no assets to pre-load, we can notify kosy that the app has started right away :)
    let initializationPromise: Promise<void> = kosyApi.startApp().then(async (initialInfo: InitialInfo<AppState>) => {
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

{#await initializationPromise}
    {#await showLoadingPromise}
        <div></div>
    {:then}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <div class="center-content">
            <span><i class="fa fa-circle-notch fa-spin"></i> Loading google drive app</span>
        </div>
    {/await}
{:then}
    {#if state.googleDriveUrl && currentUserIsSignedIntoGoogle}
        <Viewing {initializer} {currentClient} url={state.googleDriveUrl} />
    {:else if currentClient.clientUuid == initializer.clientUuid && currentUserIsSignedIntoGoogle}
        <Picking on:picked={(event) => driveUrlPicked(event.detail)} />
    {:else}
        <Waiting {initializer} {currentClient} {currentUserIsSignedIntoGoogle} googleDriveUrl={state.googleDriveUrl} on:signed-in={() => refreshSignedInWithGoogle()} />
    {/if}
{:catch error}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <div class="center-content">
        <h2 style="color: red"><i class="fas fa-exclamation-circle"></i> Oops</h2>
        <span style="color: red">An error has occured while initializing the google drive app</span>
    </div>
{/await}