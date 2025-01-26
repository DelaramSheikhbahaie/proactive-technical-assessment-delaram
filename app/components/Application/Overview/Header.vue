<script setup lang="ts">
import { useOverviewStore } from '~/stores/overview';

const props = defineProps<{
  title: string
}>()

const overViewStore = useOverviewStore()
</script>

<template>
    <div class="flex flex-row justify-between items-center w-full p-4">
        <h1 class="text-xl font-bold">{{title}}</h1>
        <div class="w-2/5 flex flex-row justify-end items-center">
            <h3 class="mr-8">Display: </h3>
            <UButton @click="overViewStore.changeDisplay('list')" icon="i-material-symbols:list-rounded" color="pink"
                variant="solid" class="py-2 px-4 mr-4">List</UButton>
            <UButton @click="overViewStore.changeDisplay('grid')" icon="i-material-symbols:background-grid-small"
                color="pink" variant="solid" class="py-2 px-4">Grid</UButton>
        </div>
    </div>
</template>