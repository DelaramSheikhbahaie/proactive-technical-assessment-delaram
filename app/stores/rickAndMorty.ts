import { rickAndMortyUrl } from '~/constants';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RickAndMortyCharactersType } from '~/constants/types';

interface CharacterResponse {
  results: RickAndMortyCharactersType[];
}

export const useRickAndMortyStore = defineStore('rickandmorty', () => {
  const characters = ref<RickAndMortyCharactersType[] | null>(null);
  const characterDetails = ref<RickAndMortyCharactersType | null>(null);

  const emptyCharacterDetails = () => characterDetails.value = null;
  const emptyCharacters = () => characters.value = null;

  const fetchCharacters = async () => {
    emptyCharacters(); // Reset characters before fetching
    try {
      const response = await fetch(`${rickAndMortyUrl}/character`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data: CharacterResponse = await response.json();
      characters.value = data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      emptyCharacters();
    }
  };

  const fetchCharacterDetails = async (id: number | string) => {
    emptyCharacterDetails(); // Reset character details before fetching
    try {
      const response = await fetch(`${rickAndMortyUrl}/character/${id}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data: RickAndMortyCharactersType = await response.json();
      characterDetails.value = data;
    } catch (error) {
      console.error('Error fetching character details:', error);
      emptyCharacterDetails();
    }
  };

  return {
    characters,
    characterDetails,
    fetchCharacters,
    fetchCharacterDetails,
  };
});
