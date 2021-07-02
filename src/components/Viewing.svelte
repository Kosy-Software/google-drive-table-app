<script lang="ts">
    import type { ClientInfo } from "@kosy/kosy-app-api/types";
    import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
    import AccessDenied from "./AccessDenied.svelte";
    export let url: string;
    export let initializer: ClientInfo;
    export let currentClient: ClientInfo;

    $: embeddableUrlPromise = convertGoogleLinkToEmbeddableLink(url);
</script>

<style lang="scss">
    iframe {
        width: 100vw;
        height: 100vh;
        border: 0px;
    }
</style>

{#await embeddableUrlPromise}
    <div></div>
{:then embeddableUrl}
    <iframe title="google drive " src={embeddableUrl}></iframe>
{:catch}
    {#if initializer.clientUuid !== currentClient.clientUuid}
        <AccessDenied msg="Please ask {initializer.clientName} to share the file with you."></AccessDenied>
    {:else}
        <!-- In theory, this should not occur, but let's include it anyway :) -->
        <AccessDenied msg="This should not occur, but it did, and we're very sorry :("></AccessDenied>
    {/if}
{/await}