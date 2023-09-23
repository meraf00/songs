import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songInitialState = {
  song: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const createSongSlice = createSlice({
  name: SONGS,
  initialState: songInitialState,
  reducers: {
    createSongAction: (state, { payload }) => {
      state.song.isLoading = true;
      state.song.errors = '';
    },

    createSongSuccessAction: (state, { payload }) => {
      state.song.data = payload;
      state.song.isLoading = false;
      state.song.errors = '';
    },

    createSongErrorAction: (state, { payload: { error } }) => {
      state.song.isLoading = false;
      state.song.errors = error;
    },
  },
});

export const {
  createSongAction,
  createSongSuccessAction,
  createSongErrorAction,
} = createSongSlice.actions;

export default createSongSlice.reducer;
