<script setup lang="ts">
import { NuxtImg, NuxtLink } from '#components'; // Auto-import or explicitly import components as needed

const props = defineProps<{
  character: {
    name: string;
    image?: string | null;
  };
  detailsLink: string;
}>();
</script>

<template>
  <div
    class="w-full bg-white p-4 my-2 flex flex-row items-center justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
    <div class="flex flex-row items-center">
      <NuxtImg
        :src="character.image || '/images/default-avatar.jpg'"
        alt="Character avatar"
        class="w-24 h-24 mr-8 rounded-lg object-cover"
      />
      <p class="text-lg font-semibold">{{ character.name }}</p>
    </div>
    <NuxtLink :to="detailsLink" class="text-pink-500">
      <UIcon name="i-material-symbols:arrow-circle-right-rounded" class="w-12 h-12" />
    </NuxtLink>
  </div>
</template>
