import { useGetPokemonByIdQuery } from '../features/pokemon/apiSlice'
import { Link } from 'react-router-dom'
import Favorite from './Favorite'
import Loading from './Loading'
import Error from './Error'

const PokemonCard = ({ pokemon }) => {
  const { data, isError, isLoading } = useGetPokemonByIdQuery(pokemon.url)

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <div className="relative flex flex-col items-center justify-center rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-white">
      <Favorite data={data} />
      <p className="capitalize ">{pokemon.name}</p>
      <Link to={`/${pokemon.name}`} className="flex w-full justify-center">
        <img src={data.sprites.front_shiny} alt={pokemon.name} />
      </Link>
    </div>
  )
}
export default PokemonCard
