<template>
    <main class='container'>
        <slot></slot>
    </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>