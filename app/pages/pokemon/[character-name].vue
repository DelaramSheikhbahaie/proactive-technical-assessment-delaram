<script setup lang="ts">
import { usePokemonStore } from '~/stores/pokemon';
import { useRouter } from 'vue-router';
import type { EffectChange, EffectEntry } from '~/constants/Types/pokemon';

const router: any = useRouter();
const characterName = router.currentRoute.value.params?.charactername;
const isHydrating = ref<boolean>(true);

const pokemonStore = usePokemonStore();
const { isLoading } = storeToRefs(pokemonStore);
const { data: characterDetails} = useAsyncData('fetchCharacterDetails', async () => {
  if (characterName)
    await pokemonStore.fetchCharacterDetails(characterName as string);
  return pokemonStore.characterDetails;
});


const englishEffectChanges = computed<EffectEntry[]>(() => {
  if (!characterDetails.value) return [];
  return characterDetails.value.effect_changes
    .flatMap((effectChange: EffectChange) =>
      effectChange.effect_entries.filter((entry: EffectEntry) => entry.language.name === 'en')
    );
});

const englishEffectEntries = computed(() => {
  if (!characterDetails.value) return [];
  return characterDetails.value.effect_entries.filter((entry: EffectEntry) => entry.language.name === 'en')
});
const showNoInformation = computed<boolean>(() => {
  return !isLoading.value && !characterDetails.value;
});

onMounted(() => {
  isHydrating.value = false;
});
</script>

<template>
  <div v-cloak>
    <div v-if="isLoading || isHydrating">
      <Loader />
    </div>
    <div v-else-if="characterDetails">
      <h1 class="text-4xl font-bold mb-8">{{ characterDetails.name }}</h1>
      <NuxtImg src="/images/default-avatar.jpg" class="w-1/5 mr-16 rounded-xl mb-8" alt="Character Avatar" />
      <div class="flex flex-row justify-start">
        <div class="flex flex-col gap-10 text-xl">
          <p>
            <strong>Effects:</strong> 
            <br />
            {{ englishEffectEntries[0]?.effect }}
            <br />
            {{ englishEffectChanges[0]?.effect }}
          </p>
          <p>
            <strong> Generation:</strong> {{ characterDetails.generation?.name }}
          </p>
          <strong v-if="characterDetails.is_main_series">Is main series</strong>
        </div>
      </div>
    </div>
    <strong v-else-if="showNoInformation">No Information</strong>
  </div>
</template>