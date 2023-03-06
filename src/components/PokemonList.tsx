import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface"
import PokemonCard from "./pokemonCard/PokemonCard";

interface PokemonListProps {
   pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
   return (
      <>
         {
            pokemons.length > 0
               ? pokemons.map((p) => {
                  return <PokemonCard key={p.name} pokemon={p} />
               })
               : null
         }
      </>
   );
};

export default PokemonList