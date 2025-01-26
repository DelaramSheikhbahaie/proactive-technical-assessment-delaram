<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
const router: any = useRouter()
const pokemonStore = usePokemonStore()
const { characterDetails }: any = storeToRefs(pokemonStore)

// onMounted(() => pokemonStore.fetchCharacterDetails(''));


</script>
<template>
    <!-- <div class="text-blacj" v-if="selectedCharacter">loading...</div> -->
    <UContainer
        class="bg-purple-200 text-black w-5/6 p-8 flex justify-start items-center flex-col rounded-lg my-16 gap-8">
        <h1 class="text-4xl font-bold">{{ characterDetails.name }}</h1>
        <NuxtImg src= "/images/default-avatar.jpg" class="w-24 h-50 rounded-xl" />
        <!-- <p class="text-xl">{{ selectedCharacter.status }} - {{ selectedCharacter.gender }} - {{
            selectedCharacter.species }}</p> -->
    </UContainer>
</template>