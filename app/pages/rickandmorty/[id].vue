<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
const router: any = useRouter()
const rickAndMortyStore = useRickAndMortyStore()
const { selectedCharacter }: any = storeToRefs(rickAndMortyStore)

onMounted(() => rickAndMortyStore.fetchCharacterDetails(router.currentRoute.value.params.id));


</script>
<template>
  <!-- <div class="text-black" v-if="selectedCharacter">loading...</div> -->
  <h1 class="text-4xl font-bold mb-8 ">{{ selectedCharacter.name }}</h1>
  <div class="flex flex-row justify-start">
    <NuxtImg :src="selectedCharacter.image" class="w-1/5 mr-16 rounded-xl" />
    <div class="flex flex-col gap-10">
      <p class="text-xl">status: <strong>{{ selectedCharacter.status }}</strong></p>
      <p class="text-xl">gender: <strong>{{ selectedCharacter.gender }}</strong> </p>
      <p class="text-xl">species: <strong>{{ selectedCharacter.species }}</strong> </p>
      <p class="text-xl">location: <strong>{{ selectedCharacter.location.name }}</strong> </p>
    </div>
  </div>
</template>