import { DetailPokemon } from "../../interfaces/pokemon.interface"
import './pokemonBasicInfo.scss'

interface PokemonBasicInfoProps {
   pokemon: DetailPokemon
}

const PokemonBasicInfo = ({ pokemon }: PokemonBasicInfoProps) => {
   return (
      <div className="basic__info">
         <table>
            <tbody>
               <tr>
                  <th scope="row">Type</th>
                  <td>{pokemon.types.map((type) => {
                     return (
                        <>{type.type.name} </>
                     )
                  })}</td>
               </tr>
               {pokemon.stats.map((stat) => {
                  return (
                     <>
                        <tr>
                           <th scope="row">{stat.stat.name}</th>
                           <td>{stat.base_stat}</td>
                        </tr>

                     </>
                  )
               })}
               <tr>
                  <th scope="row">Weight</th>
                  <td>{pokemon.weight}</td>
               </tr>
               <tr>
                  <th scope="row">Total moves</th>
                  <td>{pokemon.moves.length}</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default PokemonBasicInfo