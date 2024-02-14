<template>
    <button>
        <slot></slot>
    </button>
</template>

<script lang='ts'>
export default {
    name: 'TheButton',
};
</script>

<style scoped>
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