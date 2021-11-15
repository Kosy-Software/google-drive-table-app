<script lang="ts">
    import { initializer } from "../stores";

    let title: string;
    let icon: string;
    switch (__BUILD_TYPE__) {
        case "docs":
            title = "Doc"; 
            icon = "assets/Icon-Docs-Large.png";
            break;
        case "sheets": 
            title = "Sheets";
            icon = "assets/Icon-Sheets-Large.png";
            break;
        case "slides":
            title = "Slides";
            icon = "assets/Icon-Slides-Large.png";
            break;
    }
</script>

<style lang="scss">
    .waiting {
        .waiting-icon {
            height: 120px;
            width: 120px;
        }

        p {
            margin: 4px 0 0 0;
            font-size: 16px;
        }

        .large-gap {
            padding-top: 34px;
        }
    }
</style>

<div class="center-content waiting">
    <h3>Google {title} sharing</h3>
    <p>{$initializer.clientName} is picking a file to share</p>
    <div class="large-gap"></div>
    <div>
        <img class="waiting-icon" alt="waiting" src={icon} />
    </div>
</div>