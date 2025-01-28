<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useRouter } from 'vue-router';

const router: any = useRouter();
const characterName = router.currentRoute.value.params?.charactername;

const pokemonStore = usePokemonStore();
const { isLoading }: any = storeToRefs(pokemonStore);
const { data: characterDetails } = useAsyncData('fetchCharacterDetails', async () => {
  if (characterName)
    await pokemonStore.fetchCharacterDetails(characterName as string);
  return pokemonStore.characterDetails;
});
</script>

<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else-if="characterDetails">
      <h1 class="text-4xl font-bold mb-8">{{ characterDetails.name }}</h1>
      <div class="flex flex-row justify-start">
        <NuxtImg src="/images/default-avatar.jpg" class="w-1/5 mr-16 rounded-xl" alt="Character Avatar" />
        <div class="flex flex-col gap-10">
          <p class="text-xl">
            Generation: <strong>{{ characterDetails.generation?.name }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
