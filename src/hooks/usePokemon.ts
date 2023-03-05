import { httpClient } from './../api/httpClient';
import { POKEMON_API_POKEMON_URL } from './../constants';
import { DetailPokemon } from './../interfaces/pokemon.interface';
import { useState, useEffect } from 'react';

interface usePokemonProps {
   pokemonName: string | undefined
}

const usePokemon = ({ pokemonName }: usePokemonProps) => {
   const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
   const [isLoading, setIsLoading] = useState(false); //чтобы знать, когда закончим извлекать данные из Pokemon API

   useEffect(() => {  //добавляем эффект-хук, чтобы мы вызывали ф-ю извлечения покемонов каждый раз, когда pokemonName props изменяется 
      if (pokemonName) {   //вызываем ф-ю, если pokemonName props содержит значение
         fetchPokemon();
      }
   }, [pokemonName])

   const fetchPokemon = async () => {   //для вызова подробной информации
      if (pokemonName) {  //проверяем не является ли имя покемона null
         setIsLoading(true);
         const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
         const result = await httpClient.get<DetailPokemon>(url);  //сообщаем axios, что мы получаем DetailPokemon как ответ(response)
         if (result?.data) {    //собираемся установить состояние покемонов( setPokemon state)
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