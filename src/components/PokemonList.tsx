import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface"
import PokemonCard from "./pokemonCard/PokemonCard";

interface PokemonListProps {  //этот компонент теперь будет получать массив индексированных покемонов в качестве пропсов
   pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
   return (
      <>
         {
            pokemons.length > 0    //если в этом массиве есть элементы, то мы будем перебирать его и возвращать глубокий элемент с именем покемона
               ? pokemons.map((p) => {
                  return <PokemonCard key={p.name} pokemon={p} />     //<div key={p.name}>{p.name}</div>
               })
               : null
         }
      </>
   );
};

export default PokemonList