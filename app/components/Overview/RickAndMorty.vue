<script setup lang="ts">
import { useRickAndMortyStore } from '~/stores/rickAndMorty';
import { useOverviewStore } from '~/stores/overview';

const overViewStore = useOverviewStore()
const rickAndMortyStore = useRickAndMortyStore()
const { displayType } = storeToRefs(overViewStore)
const { characters } = storeToRefs(rickAndMortyStore)
const detailsLink = ``

onMounted(() => rickAndMortyStore.fetchCharacters());
</script>

<template>
    <DisplayList v-if="displayType === 'list'">
        <div v-for="character in characters">
            <CardList :character="character" :detailsLink="detailsLink" />
        </div>
    </DisplayList>
    <DisplayGrid v-if="displayType === 'grid'">
        <div v-for="character in characters">
            <CardGrid :character="character" :detailsLink="detailsLink" />
        </div>
    </DisplayGrid>
</template>
