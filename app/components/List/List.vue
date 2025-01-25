<script setup lang="ts">
   const data:any =  inject('characters')
   
</script>

<template>
    <div v-for="character in data">
        {{ character.name }}
    </div>
</template>