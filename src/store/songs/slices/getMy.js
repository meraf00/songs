import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songsInitialState = {
  songs: {
    data: [],
    isLoading: false,
    errors: '',
  },
};

export const getMySongsSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    getMySongsAction: (state) => {
      state.songs.isLoading = true;
      state.songs.data = [];
      state.songs.errors = '';
    },

    getMySongsSuccessAction: (state, { payload }) => {
      state.songs.data = payload;
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    getMySongsErrorAction: (state, { payload: { error } }) => {
      state.songs.isLoading = false;
      state.songs.errors = error;
    },
  },
});

export const {
  getMySongsAction,
  getMySongsSuccessAction,
  getMySongsErrorAction,
} = getMySongsSlice.actions;

export default getMySongsSlice.reducer;
