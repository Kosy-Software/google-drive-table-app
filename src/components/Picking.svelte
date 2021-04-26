<script lang="ts">
    import type { GoogleDriveUrlPicked, PickedEvent } from "../lib/componentMessages";
    import { hasValidGoogleFormat, createFileShareLink } from "../lib/googleDrive";
    import { openPopup } from "../lib/openPopup";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<PickedEvent>();

    let showSharingError = false;
    let inputValue = "";
    $: inputIsEmpty = inputValue === "";
    $: showValidationError = !inputIsEmpty && !hasValidGoogleFormat(inputValue);
    $: inputIsValid = !inputIsEmpty && !(showValidationError || showSharingError)

    let openGoogleDriveFilePicker = () => {
        openPopup("picker.html", { width: 1024, height: 1024 });

        //Might not be the best way of handling the google picker's popup message but it works well enough...
        window.addEventListener("message", (event: MessageEvent<GoogleDriveUrlPicked>) => {
            if (event.data && event.data.type) {
                switch (event.data.type) {
                    case "google-drive-url-picked":
                        if (event.data.payload.error) {
                            showSharingError = true;
                            inputValue = event.data.payload.url;
                        } else {
                            dispatch("picked", event.data.payload.url);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    };

    let openFile = () => {
        dispatch("picked", inputValue);
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

        label {
            font-size: 14px;
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
        on:input={() => { showSharingError = false; } }
    />
    <button 
        id="open-file"
        disabled={!inputIsValid} 
        class:valid={inputIsValid} 
        on:click={() => openFile()}>Open file</button>
    <p>OR</p>
    <button name="open-picker" on:click={() => openGoogleDriveFilePicker()}>
        Pick a file
        <img alt="google drive icon" src="assets/google-drive-icon.svg" />
    </button>
    {#if showSharingError}
        <label for="open-picker" style="color: red">
            The file is not shared. Please click <a href={createFileShareLink(inputValue)} target="_blank">here</a> to enable file sharing.
        </label>
    {/if}
</div>
