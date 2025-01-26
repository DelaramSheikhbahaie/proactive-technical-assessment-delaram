<script setup lang="ts">
const props = defineProps<{
    character: any
    detailsLink:any
}>()
const rickAndMortyStore = useRickAndMortyStore()
</script>
<template>
    <div class="w-full bg-white p-4 my-2 flex flex-row items-center justify-between rounded-lg">
        <p>{{ character.name }}</p>
        <NuxtLink :to="detailsLink">
            <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-10 h-10 bg-pink-500" />
        </NuxtLink>
    </div>
</template>