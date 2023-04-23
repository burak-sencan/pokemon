import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catchedPokemons: [],
  favoritePokemons: [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addCatchedPokemon: (state, action) => {
      state.catchedPokemons.push(action.payload)
    },
    releaseCatchedPokemon: (state, action) => {
      state.catchedPokemons = state.catchedPokemons.filter(
        (pokemon) => pokemon.id !== action.payload.id
      )
    },
    addFavoritePokemon: (state, action) => {
      state.favoritePokemons.push(action.payload)
    },
    deleteFavoritePokemon: (state, action) => {
      state.favoritePokemons = state.favoritePokemons.filter(
        (pokemon) => pokemon.id !== action.payload.id
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addCatchedPokemon,
  releaseCatchedPokemon,
  addFavoritePokemon,
  deleteFavoritePokemon,
} = pokemonSlice.actions

export default pokemonSlice.reducer
