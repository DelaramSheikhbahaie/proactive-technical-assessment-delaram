<script setup lang="ts">
const props = defineProps<{
    character: any
    detailsLink: any
}>()
const rickAndMortyStore = useRickAndMortyStore()
</script>
<template>
    <div class="w-full bg-white p-4 my-2 flex flex-col items-start rounded-lg">
        <NuxtImg :src="character.image || '/images/default-avatar.jpg'" alt="Character avatar"
            class="w-full mb-4 rounded-lg" />
            <p class="mb-4">{{ character.name }}</p>
        <NuxtLink :to="detailsLink" class="self-end">
            <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-12 h-12 bg-pink-500" />
        </NuxtLink>
    </div>
</template>