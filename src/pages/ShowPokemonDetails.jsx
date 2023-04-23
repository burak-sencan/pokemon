import { useParams } from 'react-router-dom'
import { useGetPokemonByNameQuery } from '../features/pokemon/apiSlice'
import { useTranslation } from 'react-i18next'
import { catchPokemon, poketop } from '../assets'
import {
  addCatchedPokemon,
  releaseCatchedPokemon,
} from '../features/pokemon/pokemonSlice'
import { useSelector, useDispatch } from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'

const ShowPokemonDetails = () => {
  const { name } = useParams()
  const catchedPokemons = useSelector((state) => state.pokemon.catchedPokemons)

  const dispatch = useDispatch()

  const { t } = useTranslation()

  const { data, isError, isLoading } = useGetPokemonByNameQuery(name)

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <main>
      <div className="flex flex-col gap-8 p-4 lg:flex-row">
        <div className="grid  grid-cols-2  items-start  gap-2 lg:w-1/3 ">
          <img
            className="w-full rounded-md bg-white shadow-md dark:bg-slate-900"
            src={data.sprites.front_default}
            alt={data.name}
          />
          <img
            className="w-full rounded-md bg-white shadow-md dark:bg-slate-900"
            src={data.sprites.front_shiny}
            alt={data.name}
          />
          <img
            className="w-full rounded-md bg-white shadow-md dark:bg-slate-900"
            src={data.sprites.back_default}
            alt={data.name}
          />

          <img
            className="w-full rounded-md bg-white shadow-md dark:bg-slate-900"
            src={data.sprites.back_shiny}
            alt={data.name}
          />
        </div>

        <div className="flex flex-col items-center gap-2 lg:w-2/3">
          {/* General */}
          <div className="flex  w-full justify-between rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-slate-50">
            <h1 className="">{t('general')}</h1>
            <div className="w-1/2">
              <p>
                {t('name')}: {data.species.name}
              </p>
              <p>
                {t('baseExperience')}: {data.base_experience}
              </p>
            </div>
          </div>
          {/* abilities */}
          <div className="flex w-full justify-between rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-slate-50">
            <h1 className=""> {t('abilities')}</h1>
            <div className="w-1/2">
              {data.abilities.map((ablt) => (
                <p key={ablt.ability.name}>{ablt.ability.name}</p>
              ))}
            </div>
          </div>
          {/* physically */}
          <div className="flex w-full justify-between rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-slate-50">
            <h1 className=""> {t('physically')}</h1>
            <div className="w-1/2">
              <p>
                {t('weight')}: {data.weight}
              </p>
              <p>
                {t('height')}: {data.height}
              </p>
            </div>
          </div>
          {/* physically */}
          {catchedPokemons.includes(data) === false ? (
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => dispatch(addCatchedPokemon(data))}
                style={{
                  backgroundImage: `url(${poketop})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
                className="flex h-32 w-32  items-center justify-center rounded-full  bg-white p-4 text-center shadow-md dark:bg-slate-900 dark:text-slate-50"
              ></button>
              <p className="dark:text-white">{t('catchPokemon')}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => dispatch(releaseCatchedPokemon(data))}
                style={{
                  backgroundImage: `url(${catchPokemon})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
                className="flex h-32 w-32  items-center justify-center rounded-full  bg-white p-4 text-center shadow-md dark:bg-slate-900 dark:text-slate-50"
              ></button>
              <p className="dark:text-white">{t('releasePokemon')} </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
export default ShowPokemonDetails
