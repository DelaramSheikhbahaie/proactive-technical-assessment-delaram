import { rickAndMortyUrl } from '~/constants';

export const useRickAndMortyStore = defineStore('rickandmorty', () => {
    const characters = ref([])
    const selectedCharacter = ref([])
  
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

    const getCharacterDetails = async (id:any) => {
      try {
        const response = await fetch(`${rickAndMortyUrl}/character/${id}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        selectedCharacter.value = data; 
      } catch (error) {
          console.error('Error fetching details:', error);
      }
    };

    return { characters , fetchCharacters , getCharacterDetails , selectedCharacter}
  })