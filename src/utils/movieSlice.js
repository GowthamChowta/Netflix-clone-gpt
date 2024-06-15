import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerId: null,
    topRatedMovies: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerId,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
