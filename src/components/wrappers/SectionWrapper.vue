<template>
    <section class='container'>
        <slot></slot>
    </section>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}
</style>