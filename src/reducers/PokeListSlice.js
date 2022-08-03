import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokeList: [],
  loading: false,
  nextList: null,
  prevList: null,
};

// Fetch first List
export const getPokeList = createAsyncThunk(
  "pokelist/fetchFirstList",
  async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=32`
    );
    // console.log(response.data);
    return response.data;
  }
);

// Fetch next or previous list
export const getNewPokeList = createAsyncThunk(
  "pokeList/fetchNextOrPrev",
  async (url) => {
    const response = await axios.get(url);
    // console.log(response.data);
    return response.data;
  }
);

const PokemonListSlice = createSlice({
  name: "pokelist",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPokeList.fulfilled, (state, action) => {
        // Assign to state
        state.pokeList = action.payload.results;
        state.nextList = action.payload.next;
        state.prevList = action.payload.previous;
        state.loading = false;
      })
      .addCase(getPokeList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPokeList.rejected, (state, action) => {
        console.log("fail to get list");
        state.loading = false;
      })
      .addCase(getNewPokeList.fulfilled, (state, action) => {
        // Assign to state
        state.pokeList = action.payload.results;
        state.nextList = action.payload.next;
        state.prevList = action.payload.previous;
        state.loading = false;
      })
      .addCase(getNewPokeList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNewPokeList.rejected, (state, action) => {
        console.log("fail to get list");
        state.loading = false;
      });
  },
});

export const isLoadingState = (state) => state.pokelist.loading;
export const nextListState = (state) => state.pokelist.nextList;
export const prevListState = (state) => state.pokelist.prevList;
export const pokeListState = (state) => state.pokelist.pokeList;

export default PokemonListSlice.reducer;
