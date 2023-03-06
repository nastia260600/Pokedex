import { POKEMON_API_BASE_URL, POKEMON_IMAGES_BASE_URL, POKEMON_TYPES } from './../constants';
import { PokemonListResponse, PokemonByTypeListResponse, IndexedPokemon, ListPokemon, PokemonType, IndexedType } from './../interfaces/pokemon.interface';
import { httpClient } from './../api/httpClient';
import { useEffect, useState } from 'react'
import { POKEMON_API_POKEMON_URL } from '../constants'

const usePokemons = () => {
   const [pokemons, setPokemons] = useState<ListPokemon[]>([])
   const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)
   const [selectedType, setSelectedType] = useState<IndexedType | null>(null)

   useEffect(() => {
      if (selectedType) {
         fetchPokemonsByType()
      } else {

         fetchPokemon()
      }
   }, [selectedType])

   const fetchPokemonsByType = async () => {
      if (selectedType) {
         const result = await httpClient.get<PokemonByTypeListResponse>(selectedType.url)
         if (result?.data?.pokemon) {
            const listPokemons = result.data.pokemon.map((p) => indexedPokemonToListPokemon(p.pokemon))
            setPokemons(listPokemons)
            setNextUrl(POKEMON_API_POKEMON_URL)
         }
      }
   }

   const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
      const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))
      //console.log(pokedexNumber)
      const listPokemon: ListPokemon = {
         name: indexedPokemon.name,
         url: indexedPokemon.url,
         image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
         pokedexNumber
      }

      return listPokemon
   }

   const fetchPokemon = async () => {
      if (nextUrl) {
         const result = await httpClient.get<PokemonListResponse>(nextUrl)
         if (result?.data?.results) {
            const listPokemons = result.data.results.map(p => indexedPokemonToListPokemon(p))
            setPokemons([...pokemons, ...listPokemons])
            setNextUrl(result.data.next)
         }
      }
   }

   return {
      pokemons,
      fetchNextPage: fetchPokemon,
      hasMorePokemon: !!nextUrl,
      pokemonTypes: POKEMON_TYPES,
      setSelectedType,
      setPokemons
   }
}

export default usePokemons