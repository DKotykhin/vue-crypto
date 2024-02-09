<template>
    <div class='buttons_wrapper'>
        <button @click='reset()'>Reset</button>
        <button @click='convert()'>Convert</button>
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

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    margin-top: 12px;
    width: 90px;
}

button:last-child {
    background-color: #e8ba00;
}

button:hover {
    background-color: #d8d8d8;
}
</style>