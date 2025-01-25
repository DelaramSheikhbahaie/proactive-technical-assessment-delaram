<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useOverviewStore } from '~/stores/overview';

const overViewStore = useOverviewStore()
const pokemonStore = usePokemonStore()
const {displayType} = storeToRefs(overViewStore)
const { characters } = storeToRefs(pokemonStore)

onMounted(()=>pokemonStore.fetchCharacters());
</script>

<template>
    <DisplayList v-if="displayType ==='list'" name="pokemon" :data="characters"/>
    <DisplayGrid v-if="displayType ==='grid'" name="pokemon" :data="characters"/>
</template>
