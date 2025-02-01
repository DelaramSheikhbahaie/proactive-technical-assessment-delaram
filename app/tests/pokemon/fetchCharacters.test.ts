import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { usePokemonStore } from '../../stores/pokemon.js';


describe('usePokemonStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const store = usePokemonStore();
    expect(store.characters).toBeNull();
    expect(store.characterDetails).toBeNull();
    expect(store.isLoading).toBe(false);
  });

  it('should fetch Pokémon characters and update the state', async () => {
    const mockCharacters = {
      results: [
        { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
      ],
    };

    vi.mock(import("#nuxt-api-party"), async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        usePokemonData: vi.fn().mockReturnValue({
          data: {
            value: {
              results: [
                { name: 'stench', url: 'https://pokeapi.co/api/v2/ability/1/' },
              ]
            }
          }
        })
      }
    })

    const store = usePokemonStore();
    await store.fetchCharacters();
    expect(store.characters).toEqual(mockCharacters.results);
    expect(store.isLoading).toEqual(false);
    vi.unmock("usePokemonData")
  });
});
