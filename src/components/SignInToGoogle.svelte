<script lang="ts">
    import Button from "@kosy/kosy-svelte-components/Button.svelte";
    import type { SignedInEvent } from "../lib/componentMessages";
    import { createEventDispatcher } from "svelte";
    import { authorizeWithGoogle, getUserIsSignedIntoGoogle } from "../lib/googleDrive";
    import { currentClient, initializer } from "../stores";

    export let url: string;

    const dispatch = createEventDispatcher<SignedInEvent>();

    let signIn = async () => {
        await authorizeWithGoogle();
        let authorized = await getUserIsSignedIntoGoogle();
        if (authorized) {
            dispatch("signed-in");
        } else {
            localStorage.removeItem("google_access_token");
            await authorizeWithGoogle();
            dispatch("signed-in");
        }
    }
</script>


<div class="center-content waiting">
    <h3>Google Drive sharing</h3>
    {#if $initializer.clientUuid == $currentClient.clientUuid}
        <p>To start sharing a file, please log in with google</p>
    {:else if url}
        <p>A file has been shared by {$initializer.clientName}, please log in with google to view it</p>
    {:else}
        <p>Please log in with google</p>
    {/if}
    <Button importance="secondary" on:click={() => signIn()}>
        <span class="text">Log in with Google</span>
        <img class="icon-right" alt="google-icon" src="assets/google-icon.svg" />
    </Button>
</div>