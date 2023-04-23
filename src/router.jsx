import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import ListPokemons from './pages/ListPokemons'
import ListCatch from './pages/ListCatch'
import ListFavorite from './pages/ListFavorite'
import ShowPokemonDetails from './pages/ShowPokemonDetails'

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ListPokemons />,
      },
      {
        path: '/:name',
        element: <ShowPokemonDetails />,
      },
      {
        path: '/list-catch',
        element: <ListCatch />,
      },
      {
        path: '/list-favorite',
        element: <ListFavorite />,
      },
    ],
  },
])

export default Router
