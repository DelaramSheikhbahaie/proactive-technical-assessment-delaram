<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const rickAndMortyStore = useRickAndMortyStore();
const { characterDetails }:any = storeToRefs(rickAndMortyStore);
const router :any= useRouter();

onMounted(() => {
  const characterId = router.currentRoute.value.params.id;
  if (characterId) {
    rickAndMortyStore.fetchCharacterDetails(characterId);
  }
});
</script>

<template>
  <div v-if="characterDetails === null" class="text-black text-2xl">
    <Loader/>
  </div>

  <div v-else>
    <h1 class="text-4xl font-bold mb-8">{{ characterDetails.name }}</h1>
    <div class="flex flex-row justify-start">
      <NuxtImg :src="characterDetails.image" class="w-1/5 mr-16 rounded-xl" alt="Character Image" />
      <div class="flex flex-col gap-10">
        <p class="text-xl">Status: <strong>{{ characterDetails.status }}</strong></p>
        <p class="text-xl">Gender: <strong>{{ characterDetails.gender }}</strong></p>
        <p class="text-xl">Species: <strong>{{ characterDetails.species }}</strong></p>
        <p class="text-xl">Location: <strong>{{ characterDetails.location.name }}</strong></p>
      </div>
    </div>
  </div>
</template>
