<script lang="ts">
import { getCategories } from '@/http/index';
import CardCategoria from './CardCategoria.vue';
import type ICategoria from '@/interfaces/ICategoria';
import BotaoPrincipal from './BotaoPrincipal.vue';

export default {
    name: 'SelecionarIngredientes',
    data() {
        return {
            // HOW TO SET A TYPE FOR THE VARIABLE
            categories: [] as ICategoria[]
        }
    },
    // LIFECYCLE METHOD 
    // Called after the instance has finished processing all state-related options.
    async created() {
        this.categories = await getCategories();
    },
    components: { CardCategoria, BotaoPrincipal },
    emits: [ 'adicionarIngrediente', 'removerIngrediente', 'buscarReceitas' ]
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>

        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
            <li v-for="category in categories" :key="category.nome">
                <CardCategoria 
                    :category="category" 
                    @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                    @remover-ingrediente="$emit('removerIngrediente', $event)"
                />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>

        <!-- SET EVENTS DIRECTLY ON THE COMPONENT IS CALLED "FALLTROUGHT ATTRIBUTES" -->
        <BotaoPrincipal texto="Buscar receitas!!" @click="$emit('buscarReceitas')"/>
    </section>
</template>

<style scoped>
    .selecionar-ingredientes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo-ingredientes {
        color: var(--verde-medio, #3D6D4A);
        display: block;
        margin-bottom: 1.5rem;
    }

    .instrucoes {
        margin-bottom: 2rem;
    }

    .categorias {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .dica {
        align-self: flex-start;
        margin-bottom: 3.5rem;
    }

    @media only screen and (max-width: 767px) {
        .dica {
            margin-bottom: 2.5rem;
        }
    }
</style>