<script setup lang="ts">
defineProps<{ name: string}>();

</script>

<template>
    {{ name }}`s list
  <List/>
</template>