import { DetailPokemon } from "../../interfaces/pokemon.interface"

interface PokemonAvatarProps {
   pokemon: DetailPokemon
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
   return (
      <div>
         <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      </div>
   )
}

export default PokemonAvatar