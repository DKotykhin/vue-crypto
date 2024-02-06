<template>
    <input min='0' type="number" placeholder='Type currency amount'
        @input='changeAmount(($event?.target as HTMLInputElement)?.value)' />
</template>

<script lang='ts'>
export default {
    name: 'InputField',
    props: {
        changeAmount: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
input {
    outline: none;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 330px;
}
</style>