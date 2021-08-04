<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import Button from "@kosy/kosy-svelte-components/Button.svelte";
    import type { ClientInfo } from "@kosy/kosy-app-api/types";
    import type { GoogleDriveUrlPicked, PickedEvent } from "../lib/componentMessages";
    import { hasValidGoogleFormat, createFileShareLink, convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
    import { openPopup } from "../lib/openPopup";
    import Creating from "./Creating.svelte";

    const dispatch = createEventDispatcher<PickedEvent>();
    export let currentClient: ClientInfo;

    let showSharingError = false;
    let showInvalidUrlError = false;
    let inputValue = "";
    let createFile = false;
    $: inputIsEmpty = inputValue === "";
    $: showValidationError = !inputIsEmpty && !hasValidGoogleFormat(inputValue);
    $: inputIsValid = !inputIsEmpty && !(showValidationError || showSharingError || showInvalidUrlError)
    
    let openGoogleDriveFilePicker = () => openPopup("picker.html", { width: 1024, height: 1024 });
    let handleGoogleDrivePickerEvent = (event: MessageEvent<GoogleDriveUrlPicked>) => {
        if (event.data && event.data.type) {
            switch (event.data.type) {
                case "google-drive-url-picked":
                    //In this case, we know the file that was picked is not shared with anyone
                    if (event.data.payload.error) {
                        showSharingError = true;
                        inputValue = event.data.payload.url;
                    //Else, we know that the file is shared -> dispatch "picked"
                    } else {
                        dispatch("picked", event.data.payload.url);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    //Might not be the best way of handling the google picker's popup message but it works well enough...
    window.addEventListener("message", handleGoogleDrivePickerEvent);
    onDestroy(() => window.removeEventListener("message", handleGoogleDrivePickerEvent));

    let openFile = () => {
        //This will create an embeddable link from the input field if possible
        convertGoogleLinkToEmbeddableLink(inputValue)
            //If possible -> dispatch "picked"
            .then(url => dispatch("picked", url))
            //If not possible -> the URL is not accessible to the user
            .catch(() => { showInvalidUrlError = true })
    }

    let openCreatedFile = (url: string) => {
        dispatch("picked", url);
    }
</script>

<style lang="scss">
    .picking {
        row-gap: 1em;
        font-size: 16px;
        
        input {
            padding: 13px 13px 13px 13px;
        }

        div {
            width: 400px;
        }

        .error-label {
            font-size: 14px;
            color: red;
        }

        p {
            margin: 0;
            height: 20px;
            font-size: 16px;
        }
    }
</style>

<div class="center-content picking">
    {#if createFile}
        <Creating {currentClient} on:created={(urlEvent) => openCreatedFile(urlEvent.detail)}></Creating>
    {:else}
        <div>
            <h3>Embed google drive</h3>
            <p>
                In Google Docs/Drive, click the Share button,<br />
                copy the link and paste below
            </p>
        </div>
        <div class="gap" />
        <input
            type="text"
            placeholder="E.g. https://drive.google.com/..."
            class:invalid={!inputIsEmpty && !inputIsValid}
            class:valid={inputIsValid}
            bind:value={inputValue}
            on:input={() => { showSharingError = false; showInvalidUrlError = false; } }
        />
        <Button importance="primary" on:click={() => openFile()} disabled={ !inputIsValid }>
            <span class="text">Open file</span>
        </Button>
        <p>OR</p>
        <div class="buttons">
            <Button importance="secondary" on:click={() => openGoogleDriveFilePicker()}>
                <span class="text">Pick a file</span>
                <img class="icon-right" alt="google drive icon" src="assets/google-drive-icon.svg" />
            </Button>
            <Button importance="secondary" on:click={() => createFile = true}>
                <span class="text">Create new file <big style="color: black;">+</big></span>
            </Button>
        </div>
        {#if showSharingError}
            <label class="error-label" for="open-picker">
                The file you picked is not a shared file. Please click <a href={createFileShareLink(inputValue)} target="_blank">here</a> to enable file sharing.
            </label>
        {/if}
        {#if showInvalidUrlError}
            <label class="error-label" for="open-picker">
                The file you tried to share with the table is not available to you.
            </label>
        {/if}
    {/if}
</div>
