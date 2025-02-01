<script setup lang="ts">
import { DISPLAY_TYPES } from '~/constants/Types/display';
import { useOverviewStore } from '~/stores/overview';

defineProps<{
    title: string
}>()

const overViewStore = useOverviewStore()

const displayOptions = [
    { type: DISPLAY_TYPES.LIST, label: 'List', icon: 'i-material-symbols:list-rounded' },
    { type: DISPLAY_TYPES.GRID, label: 'Grid', icon: 'i-material-symbols:background-grid-small' },
];
</script>

<template>
    <div class="flex flex-row justify-between items-center w-full p-4">
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <div class="w-2/5 flex flex-row justify-end items-center">
            <h3 class="mr-8">Display: </h3>
            <UButton v-for="option in displayOptions" :key="option.type"
                @click="overViewStore.changeDisplay(option.type)" :icon="option.icon" color="pink" variant="solid"
                class="py-2 px-4 mr-4">
                {{ option.label }}
            </UButton>
        </div>
    </div>
</template>