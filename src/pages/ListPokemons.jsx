import { useEffect, useState } from 'react'
import { useGetPokemonsQuery } from '../features/pokemon/apiSlice'
import PokemonCard from '../components/PokemonCard'
import { useTranslation } from 'react-i18next'
import Loading from '../components/Loading'
import Error from '../components/Error'

const ListPokemons = () => {
  const { t } = useTranslation()
  const [url, setUrl] = useState('pokemon?limit=10&offset=0')
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const { data, isError, isLoading } = useGetPokemonsQuery(url)

  const handleNext = () => {
    setUrl(nextUrl)
  }

  const handlePrev = () => {
    setUrl(prevUrl)
  }

  useEffect(() => {
    if (data) {
      setNextUrl(data.next)
      setPrevUrl(data.previous)
    }
  }, [data])

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <main className="flex flex-col  gap-8 p-4">
      <div className="grid-col-1  grid gap-4 lg:grid-cols-5">
        {data &&
          data.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
      </div>
      <div className="flex w-full justify-center gap-8">
        <button
          className={`${
            prevUrl === null ? 'bg-gray-200' : ''
          } rounded-md px-4 py-2 shadow-md dark:bg-slate-900 dark:text-white`}
          disabled={prevUrl === null}
          onClick={handlePrev}
        >
          {t('prev')}
        </button>
        <button
          className={`${
            nextUrl === null ? 'bg-gray-600' : ''
          } rounded-md px-4 py-2 shadow-md dark:bg-slate-900 dark:text-white`}
          disabled={nextUrl === null}
          onClick={handleNext}
        >
          {t('next')}
        </button>
      </div>
    </main>
  )
}

export default ListPokemons
