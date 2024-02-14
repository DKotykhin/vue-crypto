<template>
    <div class='buttons_wrapper'>
        <the-button @click='reset()'>Reset</the-button>
        <the-button @click='convert()'>Convert</the-button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ActionButtons',
    props: {
        reset: {
            type: Function,
            required: true
        },
        convert: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
.buttons_wrapper {
    display: flex;
    justify-content: center;
    gap: 24px;
    width: 100%;
    margin-bottom: 10px;
}
</style>