<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
const router: any = useRouter()
const pokemonStore = usePokemonStore()
const { characterDetails }: any = storeToRefs(pokemonStore)

onMounted(() => pokemonStore.fetchCharacterDetails(router.currentRoute.value.params.charactername));
</script>
<template>
    <h1 class="text-4xl font-bold">{{ characterDetails.name }}</h1>
    <div class="flex flex-row justify-start">
        <NuxtImg src="/images/default-avatar.jpg" class="w-1/5 mr-16 rounded-xl" />
        <div class="flex flex-col gap-10">
            <p class="text-xl">generation: <strong>{{ characterDetails.generation.name }}</strong></p>
        </div>
    </div>
</template>