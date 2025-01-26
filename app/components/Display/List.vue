<script setup lang="ts">
const pokemonStore = usePokemonStore()
const props = defineProps<{

}>()
</script>

<template>
    <div class="flex flex-col">
        <slot />
    </div>
</template>