<script setup lang="ts">
const pokemonStore = usePokemonStore()
const props = defineProps<{
    data: any
}>()
</script>

<template>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="character in props.data"
            class="w-full bg-white p-4 my-2 flex flex-row items-center justify-between rounded-lg">
            <p>{{ character.name }}</p>
            <NuxtLink @click="pokemonStore.fetchCharacterDetails(character.url)" :to="`pokemon/details/${character.name}`">
                <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-10 h-10 bg-pink-500" />
            </NuxtLink>
        </div>
    </div>
</template>