<script lang="ts">
    import type { ClientInfo } from "@kosy/kosy-app-api/types";
    import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
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
    <div>Loading...</div>
{:then embeddableUrl}
    <iframe title="google drive " src={embeddableUrl}></iframe>
{:catch}
    {#if initializer.clientUuid !== currentClient.clientUuid}
        <div>You do not have access to this file. Please ask {initializer.clientName} to share the file with you.</div>
    {:else}
        <!-- In theory, this should not occur, but let's include it anyway :) -->
        <div>The file you were trying to share is not available to you...</div>
    {/if}
{/await}