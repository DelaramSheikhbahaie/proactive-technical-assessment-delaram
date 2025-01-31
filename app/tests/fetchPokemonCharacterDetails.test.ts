import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { usePokemonStore } from '../stores/pokemon.js';


describe('usePokemonStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('should fetch Pokémon details and update the state', async () => {
    const mockDetails = {
      id: 1,
      name: 'bulbasaur',
      abilities: [
        { ability: { name: 'overgrow', url: '/ability/overgrow' } },
        { ability: { name: 'chlorophyll', url: '/ability/chlorophyll' } },
      ],
    };

    vi.mock(import("#nuxt-api-party"), async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        usePokemonData: vi.fn().mockReturnValue({
          data: {
            value: {
              id: 1,
              name: 'bulbasaur',
              abilities: [
                { ability: { name: 'overgrow', url: '/ability/overgrow' } },
                { ability: { name: 'chlorophyll', url: '/ability/chlorophyll' } },
              ],
            }
          }
        })
      }
    })

    const store = usePokemonStore();
    await store.fetchCharacterDetails('bulbasaur');

    expect(store.characterDetails).toEqual(mockDetails);
  });
});
