import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { useRickAndMortyStore } from '../../stores/rickAndMorty.js';


describe('useRickAndMortyStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const store = useRickAndMortyStore();
    expect(store.characters).toBeNull();
    expect(store.characterDetails).toBeNull();
    expect(store.isLoading).toBe(false);
  });

  it('should fetch Pokémon characters and update the state', async () => {
    const mockCharacters = {
      results: [
        {
          id: 361,
          name: "Toxic Rick",
          status: "Dead",
          species: "Humanoid",
          type: "Rick's Toxic Side",
          gender: "Male",
          origin: {
            name: "Alien Spa",
            url: "https://rickandmortyapi.com/api/location/64"
          },
          location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20"
          },
          image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
          episode: [
            "https://rickandmortyapi.com/api/episode/27"
          ],
          url: "https://rickandmortyapi.com/api/character/361",
          created: "2018-01-10T18:20:41.703Z"
        },
      ],
    };

    vi.mock(import("#nuxt-api-party"), async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        useRickAndMortyData: vi.fn().mockReturnValue({
          data: {
            value: {
              results: [
                {
                  id: 361,
                  name: "Toxic Rick",
                  status: "Dead",
                  species: "Humanoid",
                  type: "Rick's Toxic Side",
                  gender: "Male",
                  origin: {
                    name: "Alien Spa",
                    url: "https://rickandmortyapi.com/api/location/64"
                  },
                  location: {
                    name: "Earth",
                    url: "https://rickandmortyapi.com/api/location/20"
                  },
                  image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                  episode: [
                    "https://rickandmortyapi.com/api/episode/27"
                  ],
                  url: "https://rickandmortyapi.com/api/character/361",
                  created: "2018-01-10T18:20:41.703Z"
                },
              ]
            }
          }
        })
      }
    })

    const store = useRickAndMortyStore();
    await store.fetchCharacters();
    expect(store.characters).toEqual(mockCharacters.results);
    expect(store.isLoading).toEqual(false);
    vi.unmock("useRickAndMortyData")
  });
});
