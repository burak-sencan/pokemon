import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from '../components/Favorite'
import { useState } from 'react'

const ListCatch = () => {
  const catchedPokemons = useSelector((state) => state.pokemon.catchedPokemons)
  const { t } = useTranslation()

  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(index + 10)
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 10)
    }
  }

  return (
    <main className="flex flex-col gap-8 p-4">
      <div className="grid-col-1  grid gap-4 lg:grid-cols-5">
        {catchedPokemons.length === 0 ? (
          <p className="dark:text-slate-50">{t('infoCatch')}</p>
        ) : (
          catchedPokemons.slice(index, index + 10).map((catchedPokemon) => (
            <div
              key={catchedPokemon.id}
              className="relative flex flex-col items-center justify-center rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-white"
            >
              <Favorite data={catchedPokemon} />
              <p className="capitalize ">{catchedPokemon.name}</p>
              <Link to={`/${catchedPokemon.name}`}>
                <img
                  src={catchedPokemon.sprites.front_shiny}
                  alt={catchedPokemon.name}
                />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="flex w-full justify-center gap-8">
        <button
          onClick={handlePrev}
          className={`${
            index <= 0 ? 'bg-gray-200' : ''
          } rounded-md px-4 py-2 shadow-md dark:bg-slate-900 dark:text-white`}
          disabled={index <= 0}
        >
          {t('prev')}
        </button>
        <button
          onClick={handleNext}
          className={`${
            index >= catchedPokemons.length - 10 ? 'bg-gray-200' : ''
          } rounded-md px-4 py-2 shadow-md dark:bg-slate-900 dark:text-white`}
          disabled={index >= catchedPokemons.length - 10}
        >
          {t('next')}
        </button>
      </div>
    </main>
  )
}

export default ListCatch
