import { httpClient } from './../api/httpClient';
import { POKEMON_API_POKEMON_URL } from './../constants';
import { DetailPokemon } from './../interfaces/pokemon.interface';
import { useState, useEffect } from 'react';

interface usePokemonProps {
   pokemonName: string | undefined
}

const usePokemon = ({ pokemonName }: usePokemonProps) => {
   const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (pokemonName) {
         fetchPokemon();
      }
   }, [pokemonName])

   const fetchPokemon = async () => {
      if (pokemonName) {
         setIsLoading(true);
         const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
         const result = await httpClient.get<DetailPokemon>(url);
         if (result?.data) {
            setPokemon(result.data);
         }
         setIsLoading(false);
      }
   }
   return {
      pokemon,
      isLoading
   };
};

export default usePokemon