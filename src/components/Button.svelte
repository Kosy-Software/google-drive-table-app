<script type="ts">
    type ButtonSize = "regular" | "small" | "floating"
    type ButtonImportance = "spotlight" | "primary" | "secondary" | "tertiary"

    export let size: ButtonSize = "regular";
    export let importance: ButtonImportance;
    export let disabled: boolean = false;

    let buttonClass = "";
    $: {
        let cssStyles = [ "re-button", "size-" + size ]
        if (importance) cssStyles.push("importance-" + importance);
        buttonClass = [ ...cssStyles ].join(" ");
    }
</script>

<style lang="scss" global>
    @use "./../styles/_colors.scss" as colors;

    .re-button {
        text-align: center;
        border-radius: 100px;
        border: none;
        box-sizing: border-box;
        display: block;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        
        &:disabled {
            cursor: not-allowed;
        }

        &.size-regular {
            height: 52px;
            line-height: 44px;
            font-size: 14px;
            min-width: 52px;
            .icon-left,
            .icon-right {
                font-size: 20px;
            }
        }
        &.size-small {
            height: 40px;
            line-height: 36px;
            font-size: 12px;
            min-width: 40px;
            .icon-left,
            .icon-right {
                font-size: 16px;
            }
        }
        &.size-floating {
            height: 64px;
            line-height: 62px;
            font-size: 16px;
            min-width: 64px;
            .icon-left,
            .icon-right {
                font-size: 22px;
            }
        }
        &.importance-spotlight {
            background: white;
            border: 1px solid colors.$color-grey-border;
            span {
                color: black;
                background: linear-gradient(30.85deg, #5300f1 10.93%, #ff2539 85.6%);
                background-clip: text;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent;
                -moz-text-fill-color: transparent;
            }
            &:hover {
                background: colors.$color-grey-light;
            }
            &:disabled {
                background: colors.$color-grey-default;
                color: white;
            }
        }
        &.importance-primary {
            background: colors.$color-primary;
            color: white;
            &:hover {
                background: colors.$color-primary-dark;
            }
            &:disabled {
                background: colors.$color-grey-default;
            }
        }
        &.importance-secondary {
            background: white;
            border: 1px solid colors.$color-grey-border;
            color: colors.$color-grey-dark;
            &:hover {
                background: colors.$color-grey-light;
            }
            &.toggle-on {
                color: colors.$color-black-bluish;
                border-color: colors.$color-black-bluish;
            }
            &:active {
                background: colors.$color-grey-border; // good job, Robin! <3
            }
            &:disabled {
                color: colors.$color-grey-default;
                border-color: colors.$color-grey-default;
            }
        }
        &.importance-tertiary {
            background: white;
            color: colors.$color-grey-dark;
            &:hover {
                background: colors.$color-grey-light;
            }
            &.disabled {
                color: colors.$color-grey-default;
            }
        }
        .icon-left {
            padding-left: 20px;
        }
        .icon-right {
            padding-right: 20px;
        }
        .icon-left,
        .icon-right {
            vertical-align: middle;
            &:only-child {
                padding: 0;
            }
        }
        .text {
            padding: 0 8px;
            &:first-child {
                padding-left: 20px;
            }
            &:last-child {
                padding-right: 20px;
            }
        }
        .icon-left + .text {
            padding: 0 4px;
        }
        .text + .icon-right {
            margin-left: -4px;
        }
    }
</style>

<button class={buttonClass} on:click on:dblclick on:focus disabled={disabled}>
    <slot></slot>
</button>