<script setup lang="ts">
   const props =  defineProps<{
  data: any
}>()
</script>

<template>
    <div v-for="character in props.data">
        {{ character.name }}
    </div>
</template>