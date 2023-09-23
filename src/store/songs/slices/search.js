import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songsInitialState = {
  songs: {
    data: [],
    isLoading: false,
    errors: '',
  },
};

export const searchSongsSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    searchSongsAction: (state) => {
      state.songs.isLoading = true;
      state.songs.data = [];
      state.songs.errors = '';
    },

    searchSongsSuccessAction: (state, { payload }) => {
      state.songs.data = payload;
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    searchSongsErrorAction: (state, { payload: { error } }) => {
      state.songs.isLoading = false;
      state.songs.errors = error;
    },
  },
});

export const {
  searchSongsAction,
  searchSongsSuccessAction,
  searchSongsErrorAction,
} = searchSongsSlice.actions;

export default searchSongsSlice.reducer;
