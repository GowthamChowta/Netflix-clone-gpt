import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {  
        nowPlayingMovies: null,
        trailerId: null      
    },
    reducers: {
       addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies =  action.payload
       },
       addTrailerId: (state, action) => {
        state.trailerId =  action.payload
       }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerId } = moviesSlice.actions;