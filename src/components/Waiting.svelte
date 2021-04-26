<script lang="ts">
    import type { ClientInfo } from "@kosy/kosy-app-api/types";
    import type { SignedInEvent } from "../lib/componentMessages";
    import { createEventDispatcher } from "svelte";
    import { authorizeWithGoogle } from "../lib/googleDrive";

    export let googleDriveUrl: string
    export let currentUserIsSignedIntoGoogle: boolean;
    export let initializer: ClientInfo;
    export let currentClient: ClientInfo;

    const dispatch = createEventDispatcher<SignedInEvent>();

    let signIn = async () => {
        await authorizeWithGoogle().catch(() => Promise.resolve());
        dispatch("signed-in");
    } 
</script>

<style lang="scss">
    .waiting {
        display: grid;
        justify-content: center;
        align-content: center;
        text-align: center;
        height: 100vh;

        .gap {
            height: 24px;
            content: ' '
        }

        .img-container {
            width: 400px;
        }
    }
</style>

<div class="waiting">
    <h3>Google Drive sharing</h3>
    {#if initializer.clientUuid === currentClient.clientUuid}
        <p>To start sharing a file, please log in with google</p>
    {:else if googleDriveUrl}
        <p>
            {initializer.clientName} has picked a file to share, <br/>
            please log in with google to view it.
        </p>
    {:else}
        <p>{initializer.clientName} is picking a file to share</p>
    {/if}
    <div class="gap"></div>
    <div class="img-container">
        <img alt="waiting" src="assets/waiting.svg" />
    </div>
    <div class="gap"></div>
    {#if !currentUserIsSignedIntoGoogle}
        <button class="login" on:click={() => signIn()}>
            Log in with Google <img alt="google-icon" src="assets/google-icon.svg" />
        </button>
    {/if}
</div>