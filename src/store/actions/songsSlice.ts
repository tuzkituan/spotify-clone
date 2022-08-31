import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from 'utils/callAPI';

export const fetchSongs = createAsyncThunk('songs/getLikedSongs', async () => {
  const data = await callAPI.get('/me/tracks');
  return data?.items || [];
});

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export const { getLikedSongs } = songsSlice.actions;

// selectors
// export const getMe = (state) => state.user.user;
export const getSongs = (state: any) => state?.songs?.data || [];

export default songsSlice.reducer;
