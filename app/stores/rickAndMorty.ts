import { rickAndMortyUrl } from '~/constants';

export const useRickAndMortyStore = defineStore('rickandmorty', () => {
    const characters = ref([])
    const characterDetails = ref([])
  
    const fetchCharacters = async () => {
        try {
          const response = await fetch(`${rickAndMortyUrl}/character`);
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          characters.value = data.results; 
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    const fetchCharacterDetails = async (url:string) => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          characterDetails.value = data.results; 
        } catch (error) {
            console.error('Error fetching Details:', error);
        }
    };

    return { characters , fetchCharacters , fetchCharacterDetails , characterDetails}
  })