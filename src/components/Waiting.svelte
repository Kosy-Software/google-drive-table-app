<script lang="ts">
    import { initializer } from "../stores";
</script>

<style lang="scss">
    .waiting {
        .gap {
            height: 24px;
            content: ' '
        }

        .waiting-icon {
            height: 120px;
            width: 120px;
        }
    }
</style>

<div class="center-content waiting">
    <h3>Google Drive sharing</h3>
    <p>{$initializer.clientName} is picking a file to share</p>
    <div class="gap"></div>
    <div>
        <img class="waiting-icon" alt="waiting" src="assets/waiting.svg" />
    </div>
</div>