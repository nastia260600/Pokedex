import { IndexedType } from "./interfaces/pokemon.interface"

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2"
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`   /* ?limit=12 */
export const POKEMON_IMAGES_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"
export const POKEMON_TYPES: IndexedType[] = [
   {
      "name": "normal",
      "url": "https://pokeapi.co/api/v2/type/1/",
      "color": '#d7ccc9'
   },
   {
      "name": "fighting",
      "url": "https://pokeapi.co/api/v2/type/2/",
      "color": '#c8272b'
   },
   {
      "name": "flying",
      "url": "https://pokeapi.co/api/v2/type/3/",
      "color": '#8cd3ed'
   },
   {
      "name": "poison",
      "url": "https://pokeapi.co/api/v2/type/4/",
      "color": '#9d25af'
   },
   {
      "name": "ground",
      "url": "https://pokeapi.co/api/v2/type/5/",
      "color": '#ebd9a4'
   },
   {
      "name": "rock",
      "url": "https://pokeapi.co/api/v2/type/6/",
      "color": '#7b564c'
   },
   {
      "name": "bug",
      "url": "https://pokeapi.co/api/v2/type/7/",
      "color": '#cdda45'
   },
   {
      "name": "ghost",
      "url": "https://pokeapi.co/api/v2/type/8/",
      "color": '#b6c6cf'
   },
   {
      "name": "steel",
      "url": "https://pokeapi.co/api/v2/type/9/",
      "color": '#bcc2be'
   },
   {
      "name": "fire",
      "url": "https://pokeapi.co/api/v2/type/10/",
      "color": '#ff9703'
   },
   {
      "name": "water",
      "url": "https://pokeapi.co/api/v2/type/11/",
      "color": '#2195f5'
   },
   {
      "name": "grass",
      "url": "https://pokeapi.co/api/v2/type/12/",
      "color": '#4cb051'
   },
   {
      "name": "electric",
      "url": "https://pokeapi.co/api/v2/type/13/",
      "color": '#e5e835'
   },
   {
      "name": "psychic",
      "url": "https://pokeapi.co/api/v2/type/14/",
      "color": '#d31a5b'
   },
   {
      "name": "ice",
      "url": "https://pokeapi.co/api/v2/type/15/",
      "color": '#04bcd5'
   },
   {
      "name": "dragon",
      "url": "https://pokeapi.co/api/v2/type/16/",
      "color": '#683ab9'
   },
   {
      "name": "dark",
      "url": "https://pokeapi.co/api/v2/type/17/",
      "color": '#515250'
   },
   {
      "name": "fairy",
      "url": "https://pokeapi.co/api/v2/type/18/",
      "color": '#eb6292'
   }
]
