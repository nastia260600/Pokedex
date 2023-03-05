import { DetailPokemon, ListPokemon } from "../../interfaces/pokemon.interface"
import './pokemonCard.scss'
import { NavLink } from "react-router-dom";

interface PokemonCardProps {  //создаем пропс-интерфейс, чтобы заставить этот компонент получтаь один индексированный pokemon-обьект, как пропсу
   pokemon: ListPokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
   return (
      <div className="card">
         <NavLink
            to={`pokemon/${pokemon.name}`}
            style={{ textDecoration: "none", color: "#000" }}
         >
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>#{pokemon.pokedexNumber}</p>
         </NavLink>

      </div>
   )
}

export default PokemonCard