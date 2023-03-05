import { useParams, Link } from 'react-router-dom'
import usePokemon from '../../hooks/usePokemon'
import './pokemonDetail.scss'
import notFound from './notfound.png'
import PokemonAvatar from './PokemonAvatar'
import PokemonBasicInfo from '../pokemonBasicInfo/PokemonBasicInfo'


const PokemonDetail = () => {
   let { pokemonName } = useParams()

   const { pokemon, isLoading } = usePokemon({ pokemonName })
   return (
      <div className='detail'>
         {isLoading ? (
            <h2>Loading...</h2>
         ) : pokemon ? (
            <>
               <Link to={"/"} className="detail__exit">
                  <span className="detail__close">&times;</span>
               </Link>
               <PokemonAvatar pokemon={pokemon} />
               <p>{pokemon.name} #{pokemon.id}</p>
               <PokemonBasicInfo pokemon={pokemon} />
            </>
         ) : (
            <div className="not__found">
               <img src={notFound} width="200px" alt='' />
               <h2>Pokemon not found</h2>
            </div>
         )}
      </div>
   )
}

export default PokemonDetail