<script setup lang="ts">
const pokemonStore = usePokemonStore()
const props = defineProps<{
    data: any
}>()

const getUrl = (url) =>{
    pokemonStore.fetchCharacterDetails(url)
}
</script>

<template>
    <div>
        <div v-for="character in props.data">
            {{ character.name }}
            <li>
                <NuxtLink @click="getUrl(character.url)" :to="`pokemon/details/${character.name}`">link</NuxtLink>
            </li>
        </div>
    </div>
</template>