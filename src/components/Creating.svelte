<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { CreatedEvent } from "../lib/componentMessages";
    import { createGoogleDriveFile, GoogleDriveFileType } from "../lib/googleDrive";
    import { currentClient } from "../stores";
    import Button from "@kosy/kosy-svelte-components/Button.svelte";

    let isCreating = false;
    const dispatch = createEventDispatcher<CreatedEvent>();

    const getFileName = () => $currentClient.clientLocation.table.tableName + "_" + (new Date().toISOString().replace(/\D/g, ""));

    const createFile = async (fileType: GoogleDriveFileType) => {
        isCreating = true;
        try {
            let url = await createGoogleDriveFile(fileType, getFileName());
            dispatch("created", url);
        } catch (e) {
            console.error(e);
            isCreating = false;
        }
    }

    const cancelCreateFile = () => {
        dispatch("canceled");
    }
</script>

<style lang="scss">
    @use "../styles/_colors.scss" as colors;

    .creating {
        row-gap: 1em;
        font-size: 16px;
        
        div {
            width: 400px;
        }

        p {
            margin: 0;
            height: 20px;
            font-size: 16px;
        }

        .big-buttons {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            .big-button {
                background: white;
                cursor: pointer;
                width: 180px;
                height: 180px;
                padding: 36px 36px 30px;
                border-radius: 36px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px;
                background: white;
                border: 1px solid colors.$color-grey-border;
                color: colors.$color-grey-dark;
                &:hover {
                    background: colors.$color-grey-light;
                }
                &:active {
                    background: colors.$color-grey-border;
                }
                &:disabled {
                    color: colors.$color-grey-default;
                    border-color: colors.$color-grey-default;
                }
            }
        }
    }
</style>

<div class="center-content creating">
    {#if isCreating}
        <div>
            <h3>Your file is being created.</h3>
            <div class="gap" />
            <div>
                <img class="waiting-icon" alt="waiting" src="assets/waiting.svg" />
            </div>
        </div>
    {:else}
        <div>
            <h3>Create new file</h3>
            <p>
                The file will be created on google drive and<br />
                will be available to participants
            </p>
        </div>
        <div class="gap" />
        <div class="big-buttons">
            <button class="big-button" on:click={() => createFile("document")}>
                <img alt="google doc" src="assets/google-docs-icon.svg" />
                <span>Google Doc</span>
            </button>
            <button class="big-button" on:click={() => createFile("sheet")}>
                <img alt="google sheet" src="assets/google-sheets-icon.svg" />
                <span>Google Sheet</span>
            </button>
            <button class="big-button" on:click={() => createFile("slide")}>
                <img alt="google slide" src="assets/google-slides-icon.svg" />
                <span>Google Slide</span>
            </button>
        </div>
        <p>OR</p>
        <Button importance="secondary" on:click={() => cancelCreateFile()}>
            <span class="text">Share an existing file</span>
            <img class="icon-right" alt="google drive icon" src="assets/google-drive-icon.svg" />
        </Button>
    {/if}
</div>