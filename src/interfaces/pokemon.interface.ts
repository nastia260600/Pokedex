export interface IndexedPokemon {
   name: string
   url: string
}

export interface PokemonListResponse {
   count: number
   next: string | null
   previous: string | null
   results: IndexedPokemon[]
}

export interface ListPokemon {
   name: string
   url: string
   image: string
   pokedexNumber: number
}

export interface DetailPokemon {
   name: string
   id: number
   weight: number
   sprites: {
      other: {
         "official-artwork": {
            front_default: string;
         }
      }
   }
   types: PokemonType[]
   stats: PokemonStat[]
   moves: []
}

export interface PokemonType {
   slot: number
   type: {
      name: string
      url: string
   }
}

export interface PokemonStat {
   base_stat: number
   effort: number
   stat: {
      name: string
      url: string
   }
}

export interface IndexedType {
   name: string
   url: string
   color: string
}

export interface IndexedPokemonByType {
   pokemon: IndexedPokemon
   slot: string
}

export interface PokemonByTypeListResponse {
   id: number
   pokemon: IndexedPokemonByType[]
}