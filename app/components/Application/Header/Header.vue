<script setup lang="ts">
const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/pokemon', label: 'Pokemon' },
  { to: '/rickandmorty', label: 'Rick and Morty' },
];

</script>
<template>
  <header class="bg-purple-100 border-b border-b-purple-200 p-8 flex flex-row justify-between">
    <h1 class="text-black font-bold text-xl">Delaram's Assessment</h1>
    <div>
      <ApplicationHeaderLink v-for="link in NAV_LINKS" :key="link.to" :to="link.to" :label="link.label" />
    </div>
  </header>
</template>
