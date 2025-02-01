<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <UButton :to="to" :label="label" variant="link" color="pink"/>
</template>
