<script lang="ts">
    import type { GoogleDriveUrlPicked, PickedEvent } from "../lib/componentMessages";
    import { hasValidGoogleFormat, createFileShareLink, convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";
    import { openPopup } from "../lib/openPopup";
    import { createEventDispatcher, onDestroy } from "svelte";

    const dispatch = createEventDispatcher<PickedEvent>();

    let showSharingError = false;
    let showInvalidUrlError = false;
    let inputValue = "";
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

    let openFile = async () => {
        //This will create an embeddable link from the input field if possible
        convertGoogleLinkToEmbeddableLink(inputValue)
            //If possible -> dispatch "picked"
            .then(url => dispatch("picked", url))
            //If not possible -> the URL is not accessible to the user
            .catch(() => { showInvalidUrlError = true })
    }
</script>

<style lang="scss">
    .picking {
        display: grid;
        justify-content: center;
        align-content: center;
        row-gap: 1em;
        height: 100vh;
        font-size: 16px;
        text-align: center;
        
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

<div class="picking">
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
    <button 
        id="open-file"
        class:valid={inputIsValid} 
        on:click={() => openFile()}>Open file</button>
    <p>OR</p>
    <button name="open-picker" on:click={() => openGoogleDriveFilePicker()}>
        Pick a file
        <img alt="google drive icon" src="assets/google-drive-icon.svg" />
    </button>
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
</div>
