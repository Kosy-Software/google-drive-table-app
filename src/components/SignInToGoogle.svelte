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

<style lang="scss">
    .waiting-icon {
        height: 120px;
        width: 120px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 36px;
        margin-bottom: 30px;
    }

    p {
        margin: 0;
        font-size: 16px;
    }
</style>


<div class="center-content waiting">
    <div>
        <h3>Google Drive sharing</h3>
    </div>
    {#if $initializer.clientUuid == $currentClient.clientUuid}
        <p>To start sharing a file, please log in with google</p>
    {:else if url}
        <p>Please log in to your Google account to view the shared file</p>
    {:else}
        <p>Please log in with google</p>
    {/if}
    <img class="waiting-icon" alt="waiting" src="assets/Icon-Login-Large.png" />
    <Button importance="secondary" on:click={() => signIn()}>
        <span class="text">Log in with Google</span>
        <img class="icon-right" alt="google-icon" src="assets/Icon-Login.svg" />
    </Button>
</div>