import { pokemonUrl } from '~/constants';

export const usePokemonStore = defineStore('pokemon', () => {
    const characters = ref([])
    const characterDetails = ref([])
  
    const fetchCharacters = async () => {
        try {
          const response = await fetch(`${pokemonUrl}/ability`);
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          characters.value = data.results; 
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    const fetchCharacterDetails = async (name:string) => {
        try {
          const response = await fetch(`${pokemonUrl}/ability/${name}`);
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          characterDetails.value = data; 
        } catch (error) {
            console.error('Error fetching Details:', error);
        }
    };

    return { characters , fetchCharacters , fetchCharacterDetails , characterDetails}
  })