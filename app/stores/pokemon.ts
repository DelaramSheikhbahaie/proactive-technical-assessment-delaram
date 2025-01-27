import { pokemonUrl } from '~/constants';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PokemonCharactersType } from '~/constants/types';

interface CharacterResponse {
  results: PokemonCharactersType[];
}


export const usePokemonStore = defineStore('pokemon', () => {
  const characters = ref<PokemonCharactersType[] | null>(null);
  const characterDetails = ref<any | null>(null);

  const emptyCharacterDetails = () =>  characterDetails.value = null;
  const emptyCharacters = () =>  characters.value = null;

  const fetchCharacters = async () => {
    emptyCharacters()
    try {
      const response = await fetch(`${pokemonUrl}/ability`);
      if (!response.ok) throw new Error('Failed to fetch characters');
      const data:CharacterResponse = await response.json();
      characters.value = data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      emptyCharacters()
    }
  };


  const fetchCharacterDetails = async (name: string) => {
    emptyCharacterDetails()
    try {
      const response = await fetch(`${pokemonUrl}/ability/${name}`);
      if (!response.ok) throw new Error('Failed to fetch character details');
      const data:any = await response.json();
      characterDetails.value = data;
    } catch (error) {
      console.error('Error fetching character details:', error);
      emptyCharacterDetails()
    }
  };

  return { 
    characters, 
    fetchCharacters, 
    fetchCharacterDetails, 
    characterDetails 
  };
});
