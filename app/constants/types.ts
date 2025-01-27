export interface PokemonCharactersType  {
    name:string
    url:string
}

export interface RickAndMortyCharactersType  {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
      name: string
      url: string
    },
    location: {
      name: string
      url: string
    }
    image: string
    episode: string[] 
    url: string
    create: string
}