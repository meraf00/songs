import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songInitialState = {
  song: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const updateSongSlice = createSlice({
  name: SONGS,
  initialState: songInitialState,
  reducers: {
    updateSongAction: (state, { payload }) => {
      state.song.isLoading = true;
      state.song.data = null;
      state.song.errors = '';
    },

    updateSongSuccessAction: (state, { payload }) => {
      state.song.data = payload;
      state.song.isLoading = false;
      state.song.errors = '';
    },

    updateSongErrorAction: (state, { payload: { error } }) => {
      state.song.isLoading = false;
      state.song.errors = error;
    },
  },
});

export const {
  updateSongAction,
  updateSongSuccessAction,
  updateSongErrorAction,
} = updateSongSlice.actions;

export default updateSongSlice.reducer;
