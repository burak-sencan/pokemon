import { useTranslation } from 'react-i18next'
import { icons } from '../constants/Icons'
import { Link, useLocation } from 'react-router-dom'
import Divider from './Divider'

const Sidebar = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const linkItems = [
    {
      id: '1',
      url: '/',
      name: t('pokemons'),
      element: icons.MdCatchingPokemon,
    },
    {
      id: '2',
      url: '/list-catch',
      name: t('catched'),
      element: icons.MdCatchingPokemon,
    },
    {
      id: '3',
      url: '/list-favorite',
      name: t('favorite'),
      element: icons.MdCatchingPokemon,
    },
  ]

  return (
    <aside className="show-md flex w-32 shrink-0 flex-col items-center gap-4 bg-gray-100 shadow-md dark:bg-slate-900  dark:text-white lg:w-48">
      <p className="text-8xl">{icons.SiPokemon}</p>
      <Divider />
      <div className="w-full">
        {linkItems.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            className={`${
              pathname === item.url
                ? 'bg-white text-black dark:bg-slate-900 dark:text-white'
                : 'text-slate-500 '
            } flex items-center gap-2 p-2 transition hover:text-black dark:hover:bg-slate-900 dark:hover:text-white`}
          >
            {item.element} {item.name}
          </Link>
        ))}
      </div>
    </aside>
  )
}
export default Sidebar
