<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
    <div>
        list {{ name }}
    </div>
</template>