import { useDispatch, useSelector } from 'react-redux'
import { icons } from '../constants/Icons'
import {
  addFavoritePokemon,
  deleteFavoritePokemon,
} from '../features/pokemon/pokemonSlice'

const Favorite = ({ data }) => {
  const favoritePokemons = useSelector(
    (state) => state.pokemon.favoritePokemons
  )
  const dispatch = useDispatch()

  return (
    <div className="absolute right-2 top-2">
      {favoritePokemons.includes(data) === false ? (
        <button onClick={() => dispatch(addFavoritePokemon(data))}>
          {icons.AiOutlineStar}
        </button>
      ) : (
        <div className="text-yellow-400">
          <button onClick={() => dispatch(deleteFavoritePokemon(data))}>
            {icons.AiFillStar}
          </button>
        </div>
      )}
    </div>
  )
}
export default Favorite
