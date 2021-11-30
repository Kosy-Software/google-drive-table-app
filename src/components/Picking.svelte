<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import Button from "@kosy/kosy-svelte-components/Button.svelte";
    import type { GoogleDriveUrlPicked, PickedEvent } from "../lib/componentMessages";
    import { hasValidGoogleFormat, createFileShareLink, convertGoogleLinkToEmbeddableLink, createGoogleDriveFile } from "../lib/googleDrive";
    import { openPopup } from "../lib/openPopup";
    import { currentClient, initialInfo } from "../stores";

    const dispatch = createEventDispatcher<PickedEvent>();

    let showSharingError = false;
    let showInvalidUrlError = false;
    let inputValue = "";
    let creatingFile = false;
    $: inputIsEmpty = inputValue === "";
    $: showValidationError = !inputIsEmpty && !hasValidGoogleFormat(inputValue);
    $: inputIsValid = !inputIsEmpty && !(showValidationError || showSharingError || showInvalidUrlError)
    
    const openGoogleDriveFilePicker = () => openPopup("picker.html", { width: 1024, height: 1024 });
    const handleGoogleDrivePickerEvent = (event: MessageEvent<GoogleDriveUrlPicked>) => {
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

    const openFile = () => {
        //This will create an embeddable link from the input field if possible
        convertGoogleLinkToEmbeddableLink(inputValue)
            //If possible -> dispatch "picked"
            .then(url => dispatch("picked", url))
            //If not possible -> the URL is not accessible to the user
            .catch(() => { showInvalidUrlError = true })
    }

    const now = new Date ();
    const locationName = ($initialInfo.locationName && $initialInfo.locationName !== "") ? $initialInfo.locationName : "New";
    const getFileName = () => `${ locationName }_${ now.getFullYear() }_${ now.getMonth() + 1 }_${ now.getDate() }`;

    const createFile = async () => {
        try {
            creatingFile = true;
            let url = await createGoogleDriveFile(getFileName());
            dispatch("picked", url);
        } catch (e) {
            console.error(e);
            creatingFile = false;
        }
    }

    let title: string;
    let icon: string;
    switch (__BUILD_TYPE__) {
        case "docs":
            title = "Doc"; 
            icon = "assets/Icon-Docs.png";
            break;
        case "sheets": 
            title = "Sheets";
            icon = "assets/Icon-Sheets.png";
            break;
        case "slides":
            title = "Slides";
            icon = "assets/Icon-Slides.png";
            break;
    }
</script>

<style lang="scss">
    .picking {
        row-gap: 1em;
        font-size: 16px;
        
        input {
            padding: 16px 20px 16px 20px;
            width: 360px;
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

        .icon-left {
            height: 20px;
            padding-left: 0;
            margin-top: -2px;
        }

        .full-width {
            width: 100% !important;
        }

        small {
            font-size: 12px;
        }

        .open-file {
            button {
                width: 100%;
            }
        }

        .creating-icon {
            width: 90px;
            height: 90px;
        }
    }
</style>

<div class="center-content picking">
    {#if creatingFile}
        <div>
            <h3>Your file is being created...</h3>
            <div class="large-gap" />
            <div>
                <img class="creating-icon" alt="creating" src="assets/creating.gif" />
            </div>
        </div>
    {:else}
        <div>
            <h3>Embed Google { title }</h3>
        </div>
        <div class="buttons">
            <Button importance="secondary" on:click={() => openGoogleDriveFilePicker()}>
                <img class="icon-left" alt="Pick a file icon" src={icon} />
                <span class="text">Pick a file</span>
            </Button>
            <Button importance="secondary" on:click={() => createFile()}>
                <img class="icon-left" alt="Create new file icon" src="assets/create-new-file-icon.svg" />
                <span class="text">Create new file</span>
            </Button>
        </div>
        <p>OR</p>
        <div>
            <div>
                <input
                    name="shared-link"
                    type="text"
                    placeholder="E.g. https://docs.google.com/..."
                    class:invalid={!inputIsEmpty && !inputIsValid}
                    class:valid={inputIsValid}
                    bind:value={inputValue}
                    on:input={() => { showSharingError = false; showInvalidUrlError = false; } }
                />
            </div>
            <small>Go to Google Docs, click the Share button, copy the link and paste it here</small>
            <div class="large-gap" />
            <button class="re-button size-regular full-width importance-primary" on:click={() => openFile()} disabled={ !inputIsValid }>
                <span class="text">Open file</span>
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
    {/if}
</div>
