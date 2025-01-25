<script>
// import { useOverviewStore } from '~/stores/overview';

// const overViewStore = useOverviewStore()
// const isList = storeToRefs(overViewStore)
// console.log('isList' , isList);
</script>
<template>
    <div class="flex flex-row justify-between items-center w-full p-4">
        <h1 class="text-xl font-bold">Title</h1>
        <div class="flex flex-row justify-between items-center w-1/4">
            <h3>Display: </h3>
            <div class="w-2/5 flex flex-row justify-end">
                <UButton icon="i-material-symbols:list-rounded" color="pink" variant="solid" class="py-2 px-4 mr-4">List</UButton>
                <UButton icon="i-material-symbols:background-grid-small" color="pink" variant="solid" class="py-2 px-4">Grid</UButton>
                <!-- <button @click="overViewStore.changeView">Grid</button>
            <button @click="overViewStore.changeView">List</button> -->
            </div>
        </div>
    </div>
</template>