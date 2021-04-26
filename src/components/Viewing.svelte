<script lang="ts">
    import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
    export let url: string;

    $: embeddableUrl = convertGoogleLinkToEmbeddableLink(url);
</script>

<style lang="scss">
    iframe {
        width: 100vw;
        height: 100vh;
        border: 0px;
    }
</style>

<iframe title="google drive " src={embeddableUrl}></iframe>