<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useOverviewStore } from '~/stores/overview';

const overViewStore = useOverviewStore()
const pokemonStore = usePokemonStore()
const {displayType} = storeToRefs(overViewStore)
const { characters }:any  = storeToRefs(pokemonStore)

onMounted(()=>pokemonStore.fetchCharacters());
</script>

<template>
   <DisplayList v-if="displayType === 'list'">
        <div v-for="character in characters">
            <Card :character="character" :detailsLink="`pokemon/details/${character.name}`" />
        </div>
    </DisplayList>
    <DisplayGrid v-if="displayType === 'grid'">
        <div v-for="character in characters">
            <Card :character="character" :detailsLink="`pokemon/details/${character.name}`" />
        </div>
    </DisplayGrid>
</template>
