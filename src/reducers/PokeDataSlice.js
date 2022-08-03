import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonData: {},
  cardColor: "#FFFFFF",
  pokeType: [],
  pokeID: "#00",
  loading: false,
};

// Get pokemon data
export const getPokeData = createAsyncThunk(
  "pokedata/fetchPokedata",
  async (url) => {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
);
const PokemonDataSlice = createSlice({
  name: "pokedata",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPokeData.fulfilled, (state, action) => {
        const rawData = action.payload;
        // Assign to state
        if (rawData.types[0].type.name === "grass") {
          state.cardColor = "#64D0B0";
        } else if (rawData.types[0].type.name === "water") {
          state.cardColor = "#91CAF9";
        } else if (rawData.types[0].type.name === "fire") {
          state.cardColor = "#EB696B";
        } else if (rawData.types[0].type.name === "electric") {
          state.cardColor = "#F9D86E";
        } else if (rawData.types[0].type.name === "ice") {
          state.cardColor = "#98D8D8";
        } else if (rawData.types[0].type.name === "fighting") {
          state.cardColor = "#C03028";
        } else if (rawData.types[0].type.name === "poison") {
          state.cardColor = "#A040A0";
        } else if (rawData.types[0].type.name === "ground") {
          state.cardColor = "#E0C068";
        } else if (rawData.types[0].type.name === "flying") {
          state.cardColor = "#91B2E5";
        } else if (rawData.types[0].type.name === "psychic") {
          state.cardColor = "#F2888B";
        } else if (rawData.types[0].type.name === "bug") {
          state.cardColor = "#93B11E";
        } else if (rawData.types[0].type.name === "rock") {
          state.cardColor = "#C4B984";
        } else if (rawData.types[0].type.name === "ghost") {
          state.cardColor = "#4A68B9";
        } else if (rawData.types[0].type.name === "dragon") {
          state.cardColor = "#0063C3";
        } else if (rawData.types[0].type.name === "steel") {
          state.cardColor = "#408B99";
        } else if (rawData.types[0].type.name === "dark") {
          state.cardColor = "#56525C";
        } else if (rawData.types[0].type.name === "fairy") {
          state.cardColor = "#E98CE1";
        } else if (rawData.types[0].type.name === "normal") {
          state.cardColor = "#A8A878";
        }
        state.loading = false;
      })
      .addCase(getPokeData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPokeData.rejected, (state, action) => {
        console.log("fail to get list");
        state.loading = false;
      });
  },
});

export const cardColorState = (state) => state.pokedata.cardColor;
export const pokeIDState = (state) => state.pokedata.pokeID;
export const pokeDataState = (state) => state.pokedata.pokemonData;
export const pokeTypeState = (state) => state.pokedata.pokeType;
export const isLoadingState = (state) => state.pokedata.loading;
export default PokemonDataSlice.reducer;
