import { POKEMON_API_BASE_URL, POKEMON_IMAGES_BASE_URL, POKEMON_TYPES } from './../constants';
import { PokemonListResponse, PokemonByTypeListResponse, IndexedPokemon, ListPokemon, PokemonType, IndexedType } from './../interfaces/pokemon.interface';
import { httpClient } from './../api/httpClient';
import { useEffect, useState } from 'react'
import { POKEMON_API_POKEMON_URL } from '../constants'

const usePokemons = () => {   //будем отслеживать покемонов с помощью массива
   const [pokemons, setPokemons] = useState<ListPokemon[]>([]) //это будет массив индексированных покемонов и мы инициализируем его как пустой массив
   const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)   //создаем следующее состояние url(next url state) в хуке и инициализируем его нашей POKEMON-URL константой
   const [selectedType, setSelectedType] = useState<IndexedType | null>(null) //собираемся менять этот state, когда юзер кликает на type button

   useEffect(() => { //устанавливаем useEffect, чтобы вызывать эту ф-ю в начале пользовательского хука
      if (selectedType) {
         fetchPokemonsByType()
      } else {

         fetchPokemon()
      }
   }, [selectedType])

   const fetchPokemonsByType = async () => {  //ф-я извлечения покемонов
      if (selectedType) {   //если nextUrl имеет значение
         const result = await httpClient.get<PokemonByTypeListResponse>(selectedType.url) //то вызываем этот url с помощью нашего axios-экземпляра и сохраняем данные как ответ списка покемонов
         if (result?.data?.pokemon) {
            const listPokemons = result.data.pokemon.map((p) => indexedPokemonToListPokemon(p.pokemon))
            setPokemons(listPokemons)
            setNextUrl(POKEMON_API_POKEMON_URL)
         }
      }
   }

   //преобразовываем каждого проиндексированного покемона в массиве результатов в список покемонов, добавляя число покемона и url изображения
   const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {  //ф-я получает проиндекс. покемона(входные данные) и возвращает список покемонов
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

   const fetchPokemon = async () => {  //ф-я извлечения покемонов
      if (nextUrl) {   //если nextUrl имеет значение
         const result = await httpClient.get<PokemonListResponse>(nextUrl) //то вызываем этот url с помощью нашего axios-экземпляра и сохраняем данные как ответ списка покемонов
         if (result?.data?.results) {  //сохраним массив результатов в нашем массиве состояний покемонов(pokemon state array)
            const listPokemons = result.data.results.map(p => indexedPokemonToListPokemon(p))
            setPokemons([...pokemons, ...listPokemons])
            setNextUrl(result.data.next)
         }
      }
   }

   return { //этот хук будет возвращать обьект с массивом покемонов
      pokemons,
      fetchNextPage: fetchPokemon,
      hasMorePokemon: !!nextUrl,
      pokemonTypes: POKEMON_TYPES,
      setSelectedType,
      setPokemons
   }
}

export default usePokemons