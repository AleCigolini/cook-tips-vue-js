<script lang="ts">
    export default {
        props: {
            texto: { type: String, required: true }
        }
    }
</script>

<template>
    <button class="botao-principal">
        {{ texto }}
    </button>
</template>

<style scoped>
    .botao-principal {
        cursor: pointer;
        color: var(--creme, #FFFAF3);
        background: var(--coral, #F0633C);
        font-weight: 700;
        width: 312px;
        height: 56px;
        border-radius: 32px;
    }
</style>