import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (url) => url,
    }),
    getPokemonById: builder.query({
      query: (url) => url,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const {
  useGetPokemonsQuery,
  useGetPokemonByIdQuery,
  useGetPokemonByNameQuery,
} = pokemonApi
