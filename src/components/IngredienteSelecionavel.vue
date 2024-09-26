<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    components: { Tag },
    data() {
        return {
            isSelecionado: false
        }
    },
    methods: {
        onClick() {
            this.isSelecionado = !this.isSelecionado;

            if(this.isSelecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    emits: [ 'adicionarIngrediente', 'removerIngrediente' ] // IT IS A GOOD PRACTICE WHEN USE EMIT EVENT
}
</script>

<template>
    <button
        class="ingrediente"
        @click="onClick()"
        :aria-pressed="isSelecionado"
    >
        <Tag :texto="ingrediente" :ativa="isSelecionado" />
    </button>
</template>

<style scoped>
    .ingrediente {
        cursor: pointer;
    }
</style>