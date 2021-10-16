<script lang="ts">
    import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
    import AccessDenied from "./AccessDenied.svelte";
    import { currentClient, initializer } from "../stores";
    export let url: string;

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
    {#if $initializer.clientUuid !== $currentClient.clientUuid}
        <AccessDenied msg="Please ask {$initializer.clientName} to share the file with you."></AccessDenied>
    {:else}
        <!-- In theory, this should not occur, but let's include it anyway :) -->
        <AccessDenied msg="This should not occur, but it did, and we're very sorry :("></AccessDenied>
    {/if}
{/await}