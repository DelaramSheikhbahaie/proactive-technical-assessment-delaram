<script setup lang="ts">
const PAGES = [
  { to: '/pokemon', label: 'Pokemon' },
  { to: '/rickandmorty', label: 'Rick and Morty' },
];
</script>
<template>
  <h1 class="text-xl mb-8">Choose your adventure!</h1>
  <div class="flex flex-row justify-start">
    <NuxtLink v-for="page in PAGES" :key="page.to" :to="page.to">
      <UButton color="pink" variant="solid" class="py-4 px-8 mr-4">{{ page.label }}</UButton>
    </NuxtLink>
  </div>
</template>