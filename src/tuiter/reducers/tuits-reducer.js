import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
 };
 
 const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
 }
 

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
  toggleLike(state, action) {
    const tuit = state.find((item) =>
    item._id === action.payload)
    if (tuit.liked) {
      tuit.liked = false
      tuit.likes-=1
    } else {
      tuit.liked = true
      tuit.likes+=1
    }
  },
  createTuit(state, action) {
    state.unshift({
      ...action.payload,
      ...templateTuit,
      _id: (new Date()).getTime(),
    })
  },
  deleteTuit(state, action) {
    const idx = state.findIndex(item => item._id == action.payload)
    if (idx != -1) {
      state.splice(idx, 1)
    }
    
  }
}
});

export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions
export default tuitsSlice.reducer;

