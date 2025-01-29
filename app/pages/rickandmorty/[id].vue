<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
import { useRouter } from 'vue-router';

const router:any = useRouter();
const characterId = router.currentRoute.value.params.id;

const rickAndMortyStore = useRickAndMortyStore();
const { isLoading } = storeToRefs(rickAndMortyStore);
const { data: characterDetails } = useAsyncData('fetchCharacterDetails', async () => {
  if (characterId)
    await rickAndMortyStore.fetchCharacterDetails(characterId as number);
  return rickAndMortyStore.characterDetails;
});
</script>

<template>
  <div v-if="isLoading" class="text-black text-2xl">
    <Loader />
  </div>
  <div v-else-if="characterDetails">
    <h1 class="text-4xl font-bold mb-8">{{ characterDetails.name }}</h1>
    <div class="flex flex-row justify-start">
      <NuxtImg :src="characterDetails.image" class="w-1/5 mr-16 rounded-xl" alt="Character Image" />
      <div class="flex flex-col gap-10">
        <p class="text-xl">Status: <strong>{{ characterDetails.status }}</strong></p>
        <p class="text-xl">Gender: <strong>{{ characterDetails.gender }}</strong></p>
        <p class="text-xl">Species: <strong>{{ characterDetails.species }}</strong></p>
        <p class="text-xl">Location: <strong>{{ characterDetails.location?.name }}</strong></p>
      </div>
    </div>
  </div>
</template>
