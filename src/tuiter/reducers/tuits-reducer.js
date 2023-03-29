import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../data/tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const initialState = {
  tuits: [],
  loading: false,
  error: null
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 reducers: {
    toggleLike(state, action) {
      const tuit = state.tuits.find((item) =>
      item._id === action.payload)
      if (tuit.liked) {
        tuit.liked = false
        tuit.likes-=1
      } else {
        tuit.liked = true
        tuit.likes+=1
   }
  }
 },
 extraReducers: {
  [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
  },
  [findTuitsThunk.pending]:
     (state) => {
        state.loading = true
  },
  [findTuitsThunk.fulfilled]:
     (state, { payload }) => {
        state.loading = false
        state.tuits = payload
  },
  [findTuitsThunk.rejected]:
     (state, action) => {
        state.loading = false
        state.error = action.error
  },
  [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }
},
});

export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions
export default tuitsSlice.reducer;

