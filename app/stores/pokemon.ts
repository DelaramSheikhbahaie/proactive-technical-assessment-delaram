import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PokemonCharactersType } from '~/constants/types';

interface CharacterResponse {
  results: PokemonCharactersType[];
}


export const usePokemonStore = defineStore('pokemon', () => {
  const characters = ref<PokemonCharactersType[] | null>(null);
  const characterDetails = ref<any | null>(null);
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
      const { data } = await usePokemonData<CharacterResponse>('/ability');
      characters.value = data.value?.results || [];
    } catch (error) {
      handleError(error, 'cannot fetch characters');
    } finally {
      setIsLoading(false)
    }
  };


  const fetchCharacterDetails = async (name: string) => {
    clearCharacterDetails()
    setIsLoading(true)
    
    try {
      const { data } = await usePokemonData<Record<string, any>>(`/ability/${name}`);
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
