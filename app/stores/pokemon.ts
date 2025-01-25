import { pokemonUrl } from '~/constants';

export const usePokemonStore = defineStore('pokemon', () => {
    const characters = ref([])
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }
    const fetchCharacters = async () => {
        try {
          const response = await fetch(`${pokemonUrl}/ability`);
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          characters.value = data.results; 
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
        // console.log('characters' ,  characters);
    };
    return { characters , fetchCharacters }
  })