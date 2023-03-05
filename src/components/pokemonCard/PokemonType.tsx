import { DetailPokemon } from "../../interfaces/pokemon.interface"

interface PokemonTypeProps {
   type: DetailPokemon
}

const PokemonType = ({ type }: PokemonTypeProps) => {
   return (
      <div>
         {type.types.map((type) => {
            return (
               <p>{type.type.name}</p>
            )
         })}
      </div>
   )
}

export default PokemonType