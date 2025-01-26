<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
const router: any = useRouter()
const rickAndMortyStore = useRickAndMortyStore()
const { selectedCharacter }: any = storeToRefs(rickAndMortyStore)

onMounted(() => rickAndMortyStore.fetchCharacterDetails(router.currentRoute.value.params.id));


</script>
<template>
  <!-- <div class="text-black" v-if="selectedCharacter">loading...</div> -->
    <h1 class="text-4xl font-bold">{{ selectedCharacter.name }}</h1>
    <NuxtImg :src="selectedCharacter.image" class="w-32 h-32 rounded-xl" />
    <p class="text-xl">{{ selectedCharacter.status }} - {{ selectedCharacter.gender }} - {{ selectedCharacter.species }}
    </p>
</template>