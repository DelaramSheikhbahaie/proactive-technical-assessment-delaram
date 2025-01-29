<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useOverviewStore } from '~/stores/overview';
import { storeToRefs } from 'pinia';

const overviewStore = useOverviewStore();
const { displayType } = storeToRefs(overviewStore);

const pokemonStore = usePokemonStore();
const { isLoading } = storeToRefs(pokemonStore);
const { data: characters } = useAsyncData('fetchCharacters', async () => {
  await pokemonStore.fetchCharacters();
  return pokemonStore.characters;
});
</script>

<template>
  <div v-if="isLoading">
    <Loader />
  </div>

  <div v-else-if="characters">
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
