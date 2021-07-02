<script lang="ts">
    import type { ClientInfo } from "@kosy/kosy-app-api/types";
    import type { SignedInEvent } from "../lib/componentMessages";
    import { createEventDispatcher } from "svelte";
    import { authorizeWithGoogle } from "../lib/googleDrive";
    import Button from "@kosy/kosy-svelte-components/Button.svelte";

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
        .gap {
            height: 24px;
            content: ' '
        }

        .waiting-icon {
            height: 120px;
            width: 120px;
        }
    }
</style>

<div class="center-content waiting">
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
    <img class="waiting-icon" alt="waiting" src="assets/waiting.svg" />
    <div class="gap"></div>
    {#if !currentUserIsSignedIntoGoogle}
        <Button importance="secondary" on:click={() => signIn()}>
            <span class="text">Log in with Google</span>
            <img class="icon-right" alt="google-icon" src="assets/google-icon.svg" />
        </Button>
    {/if}
</div>