<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { CreatedEvent } from "../lib/componentMessages";
    import { createGoogleDriveFile, GoogleDriveFileType } from "../lib/googleDrive";
    import { currentClient } from "../stores";

    const dispatch = createEventDispatcher<CreatedEvent>();

    const getFileName = () => $currentClient.clientLocation.table.tableName + "_" + (new Date().toISOString().replace(/\D/g, ""));

    const createFile = async (fileType: GoogleDriveFileType) => {
        let url = await createGoogleDriveFile(fileType, getFileName());
        dispatch("created", url);
    }
</script>

<style lang="scss">
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

            .big-button {
                width: 180px;
                height: 180px;
                padding: 36px 36px 30px;
                border-radius: 36px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 24px;
            }
        }
    }
</style>

<div class="center-content creating">
    <div>
        <h3>Create new file</h3>
        <p>
            The file will be created on google drive and<br />
            will be available to participants
        </p>
    </div>
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
</div>