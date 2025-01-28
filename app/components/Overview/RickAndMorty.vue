<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
import { useOverviewStore } from '~/stores/overview';
import { storeToRefs } from 'pinia';

const overviewStore = useOverviewStore();
const rickAndMortyStore = useRickAndMortyStore();

const { displayType } = storeToRefs(overviewStore);
const { characters, isLoading } = storeToRefs(rickAndMortyStore);

rickAndMortyStore.fetchCharacters();
</script>

<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div>
    <DisplayList v-if="displayType === 'list' && characters">
      <div v-for="character in characters" :key="character.id">
        <CardList :character="character" :detailsLink="`rickandmorty/${character.id}`" />
      </div>
    </DisplayList>
    <DisplayGrid v-if="displayType === 'grid' && characters">
      <div v-for="character in characters" :key="character.id">
        <CardGrid :character="character" :detailsLink="`rickandmorty/${character.id}`" />
      </div>
    </DisplayGrid>
  </div>
</template>
