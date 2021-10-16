<script lang="ts">
    import type { AppMessage } from './lib/appMessages';
    import type { AppState, ViewState } from './lib/appState';
    import type { InitialInfo } from '@kosy/kosy-app-api/types';
    import { KosyApi } from '@kosy/kosy-app-api';
    import { getUserIsSignedIntoGoogle } from './lib/googleDrive';

    import Viewing from "./components/Viewing.svelte";
    import Picking from "./components/Picking.svelte";
    import Waiting from "./components/Waiting.svelte";
    import SignInToGoogle from './components/SignInToGoogle.svelte';
    import { initializer, currentClient, initialInfo as initialInfoStore } from './stores';

    let state: AppState = { googleDriveUrl: null };
    let currentUserIsSignedIntoGoogle: boolean = false;
    let viewState: ViewState;

    let kosyApi = new KosyApi<AppState, AppMessage, AppMessage>({
        onClientHasLeft: (clientUuid) => onClientHasLeft(clientUuid),
        onReceiveMessageAsHost: message => message,
        onReceiveMessageAsClient: (message) => { processMessage(message) },
        onRequestState: () => state,
        onProvideState: (newState: AppState) => state = newState
    });

    //Times out after 3 seconds to show a loading screen if necessary
    let showLoadingPromise: Promise<void> = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(); }, 3000);
    });

    //There are no assets to pre-load, we can notify kosy that the app has started right away :)
    let initializationPromise: Promise<void> = kosyApi.startApp().then(async (initialInfo: InitialInfo<AppState>) => {
        //Determine if the current user is signed into google
        currentUserIsSignedIntoGoogle = await getUserIsSignedIntoGoogle()
        initialInfoStore.set(initialInfo);

        //If this is the first client, the currentAppState will be empty. 
        //Don't set the state but use the default one
        if (initialInfo.currentClientUuid == initialInfo.initializerClientUuid) {
            viewState = "picking";
        } else {
            if (initialInfo.currentAppState.googleDriveUrl) {
                viewState = "viewing";
            } else {
                viewState = "waiting";
            }
        }
        state = initialInfo.currentAppState ?? state;
    })

    //If no google drive url has been picked, and the initializer is gone -> end the integration
    //Otherwise, ignore.
    function onClientHasLeft(clientUuid: string) {
        if (clientUuid === $initializer.clientUuid && !state.googleDriveUrl) {
            kosyApi.stopApp();
        }
    }

    //Process the message that was sent via the kosy network
    function processMessage(message: AppMessage) {
        switch (message.type) {
            case "receive-google-drive-url":
                log("Received a message from Kosy: ", message);
                state = { ...state, googleDriveUrl: message.payload };
                viewState = "viewing";
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
        console.log(`${$currentClient?.clientName ?? "New user"} logged: `, ...message);
    }

    let googleApiKey = __GOOGLE_API_KEY__ ;
    let googleClientId = __GOOGLE_CLIENT_ID__;
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
    {#if !currentUserIsSignedIntoGoogle}
        <SignInToGoogle url={state.googleDriveUrl} on:signed-in={() => refreshSignedInWithGoogle()} />
    {:else if viewState === "viewing"}
        <Viewing url={state.googleDriveUrl} />    
    {:else if viewState === "picking"}
        <Picking on:picked={(event) => driveUrlPicked(event.detail)} />
    {:else if viewState === "waiting"}
        <Waiting />
    {/if}
{:catch error}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <div class="center-content">
        <h2 style="color: red"><i class="fas fa-exclamation-circle"></i> Oops</h2>
        <span style="color: red">An error has occured while initializing the google drive app { googleApiKey } { googleClientId }</span>
    </div>
{/await}