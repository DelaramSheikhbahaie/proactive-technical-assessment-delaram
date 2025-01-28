import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RickAndMortyCharactersType } from '~/constants/types';

interface CharacterResponse {
  results: RickAndMortyCharactersType[];
}

export const useRickAndMortyStore = defineStore('rickandmorty', () => {
  const characters = ref<RickAndMortyCharactersType[] | null>(null);
  const characterDetails = ref<RickAndMortyCharactersType | null>(null);
  const isLoading = ref(false);

  const clearCharacters = () => {
    characters.value = null;
  };

  const clearCharacterDetails = () => {
    characterDetails.value = null;
  };

  const setIsLoading = (status:boolean) =>  isLoading.value = status;
  
  const handleError = (error: unknown, message: string) => {
    console.error('API Error:', message, error);
  };

  const fetchCharacters = async () => {
    clearCharacters()
    setIsLoading(true)

    try {
      const { data } = await useRickAndMortyData<CharacterResponse>('/character');
      characters.value = data.value?.results || [];
    } catch (error) {
      handleError(error, 'cannot fetch characters');
    } finally {
      setIsLoading(false)
    }
  };

  const fetchCharacterDetails = async (id: number | string) => {
    clearCharacterDetails()
    setIsLoading(true)
    
    try {
      const { data } = await useRickAndMortyData<RickAndMortyCharactersType>(`/character/${id}`);
      characterDetails.value = data.value || null;
    } catch (error) {
      handleError(error, 'cannot fetch character details');
    } finally {
      setIsLoading(false)
    }
  };

  return {
    characters,
    characterDetails,
    fetchCharacters,
    fetchCharacterDetails,
    isLoading
  };
});
