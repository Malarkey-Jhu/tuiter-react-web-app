import { createSlice } from "@reduxjs/toolkit"

const currentProfile = {
  name: 'Jose Annunziato', handle: '@jannunzi',
  profilePicture: 'user1.jpeg', 	bannerPicture: 'salmon.jpg',
  bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
  followingCount: 340,	followersCount: 223
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: currentProfile,
  reducers: {
    saveProfile(state, action) {
      const payload = action.payload
      state.name = payload.name
      state.bio = payload.bio
      state.location = payload.location
      state.dateOfBirth = payload.dateOfBirth
      state.website = payload.website
    }
  }
})

export const { saveProfile } = profileSlice.actions; 

export default profileSlice.reducer;