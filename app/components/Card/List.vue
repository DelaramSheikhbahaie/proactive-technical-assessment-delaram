<script setup lang="ts">
const props = defineProps<{
    character: any
    detailsLink: any
    selectCharacter?:any
}>()
const rickAndMortyStore = useRickAndMortyStore()

const handler = () => props.selectCharacter(props.character)

</script>
<template>
    <div class="w-full bg-white p-4 my-2 flex flex-row items-center justify-between rounded-lg">
        <div class="flex flex-row justify-start items-center">
            <NuxtImg :src="character.image || '/images/default-avatar.jpg'" alt="Character avatar"
                class="w-24 h-24 mr-8 rounded-lg" />
            <p>{{ character.name }}</p>
        </div>
        <NuxtLink :to="detailsLink">
            <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-12 h-12 bg-pink-500" @click="handler" />
        </NuxtLink>
    </div>
</template>