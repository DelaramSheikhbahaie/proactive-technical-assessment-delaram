<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useOverviewStore } from '~/stores/overview';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const overviewStore = useOverviewStore();
const pokemonStore = usePokemonStore();

const { displayType } = storeToRefs(overviewStore);
const { characters }:any = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.fetchCharacters();
});
</script>

<template>
  <div v-if="characters === null">
    <Loader />
  </div>
  
  <div v-else>
    <DisplayList v-if="displayType === 'list'">
      <div v-for="(character, index) in characters" :key="index">
        <CardList :character="character" :detailsLink="`pokemon/${character.name}`" />
      </div>
    </DisplayList>

    <DisplayGrid v-else-if="displayType === 'grid'">
      <div v-for="(character, index) in characters" :key="index">
        <CardGrid :character="character" :detailsLink="`pokemon/${character.name}`" />
      </div>
    </DisplayGrid>
  </div>
</template>
