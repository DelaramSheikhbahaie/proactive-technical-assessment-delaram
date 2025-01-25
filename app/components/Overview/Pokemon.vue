/,<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';

const pokemonStore = usePokemonStore()
const { characters } = storeToRefs(pokemonStore)

// onMounted(pokemonStore.fetchCharacters());
pokemonStore.fetchCharacters()

console.log('characters' , characters);


</script>

<template>
    <List name="pokemon" :data="characters"/>
</template>
