<script lang="ts">
    export let msg: string;
</script>

<style lang="scss">
    .access-denied {
        height: 120px;
        width: 120px;
    }
</style>

<div class="center-content">
    <div>
        <h3>You don't have access to this file</h3>
        <p>{msg}</p>
    </div>
    <div class="gap"></div>
    <div>
        <img class="access-denied" src="assets/access-denied.svg" alt="access-denied">
    </div>
</div>