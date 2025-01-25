<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="rounded shadow shadow-slate-100 ">
    <header class="border-b border-b-slate-200 ">
      <h2 class="text-center text-2xl font-bold tracking-wide text-slate-700 ">
        {{ props.title }}
      </h2>
    </header>
    <main class="p-4">
      <slot />
    </main>
  </section>
</template>
