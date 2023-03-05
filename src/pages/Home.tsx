import PokemonList from "../components/PokemonList"
import usePokemons from "../hooks/usePokemons"
import { Outlet } from "react-router-dom";
import './home.scss'
import { IndexedType } from "../interfaces/pokemon.interface";

const Home = () => {
   const { pokemons, fetchNextPage, hasMorePokemon, pokemonTypes, setSelectedType, setPokemons } = usePokemons() //импортируем наш usePokemons-хук, чтобы начать его использовать

   const handleSelectType = (type: IndexedType | null) => {
      if (type) {
         setSelectedType(type)
      } else {
         setPokemons([])
         setSelectedType(null)
      }
   }

   return (
      <div className="main">
         <h1>Pokedex</h1>
         <div className="container filter">
            {pokemonTypes.map((type) => (
               <button className="filter__btn" style={{ backgroundColor: type.color }} onClick={() => handleSelectType(type)}>{type.name}</button>
            ))}
            <button className="filter__all-btn filter__btn" onClick={() => handleSelectType(null)}>All</button>
         </div>
         <div className="container">
            <div className="cards">
               <div className="cards__cnt">
                  <PokemonList pokemons={pokemons} />
               </div>
               <div className="btn">
                  {hasMorePokemon ? (
                     <button className="load__btn" type="button" onClick={fetchNextPage}>Load more</button>
                  ) : null}
               </div>
            </div>
            <div className="details">
               <Outlet />
            </div>
         </div>

      </div>
   )
}

export default Home