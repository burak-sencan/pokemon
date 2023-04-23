import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from '../components/Favorite'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const ListFavorite = () => {
  const favoritePokemons = useSelector(
    (state) => state.pokemon.favoritePokemons
  )
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
        {favoritePokemons.length === 0 ? (
          <p className="dark:text-slate-50">{t('infoFavorite')}</p>
        ) : (
          favoritePokemons.slice(index, index + 10).map((favoritePokemon) => (
            <div
              key={favoritePokemon.id}
              className="relative flex flex-col items-center justify-center rounded-md bg-white p-4 shadow-md dark:bg-slate-900 dark:text-white"
            >
              <Favorite data={favoritePokemon} />
              <p className="capitalize ">{favoritePokemon.name}</p>
              <Link
                to={`/${favoritePokemon.name}`}
                className="flex w-full justify-center"
              >
                <img
                  src={favoritePokemon.sprites.front_shiny}
                  alt={favoritePokemon.name}
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
            index >= favoritePokemons.length - 10 ? 'bg-gray-200' : ''
          } rounded-md px-4 py-2 shadow-md dark:bg-slate-900 dark:text-white`}
          disabled={index >= favoritePokemons.length - 10}
        >
          {t('next')}
        </button>
      </div>
    </main>
  )
}

export default ListFavorite
