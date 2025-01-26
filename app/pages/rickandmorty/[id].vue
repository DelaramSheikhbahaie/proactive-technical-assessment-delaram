<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
 const router:any = useRouter()
const rickAndMortyStore = useRickAndMortyStore()
const { selectedCharacter }:any = storeToRefs(rickAndMortyStore)

onMounted(() => rickAndMortyStore.getCharacterDetails(router.currentRoute.value.params.id));


</script>
<template >
  <!-- <div class="text-blacj" v-if="selectedCharacter">loading...</div> -->
  <UContainer class="bg-purple-200 text-black w-5/6 p-8 flex justify-start items-center flex-col rounded-lg my-16 gap-8">
    <h1 class="text-4xl font-bold">{{ selectedCharacter.name }}</h1>
    <NuxtImg :src="selectedCharacter.image" class="w-50 h-50 rounded-xl"/>
  <p class="text-xl">{{ selectedCharacter.status }} - {{ selectedCharacter.gender }} - {{ selectedCharacter.species }}</p>
</UContainer>
</template>