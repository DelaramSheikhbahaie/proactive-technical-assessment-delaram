<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  character: {
    name: string;
    image?: string | null;
  };
  detailsLink: string;
}>();
</script>

<template>
  <div class="w-full bg-white p-4 my-2 flex flex-col items-start justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <NuxtImg
      :src="character.image || '/images/default-avatar.jpg'"
      alt="Character avatar"
      class="w-full mb-4 rounded-lg object-cover"
    />
    <p class="text-lg w-full font-semibold mb-4 truncate">{{ character.name }}</p>
    <NuxtLink :to="detailsLink" class="self-end">
      <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-12 h-12 text-pink-500" />
    </NuxtLink>
  </div>
</template>
