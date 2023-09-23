import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songInitialState = {
  song: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const deleteSongSlice = createSlice({
  name: SONGS,
  initialState: songInitialState,
  reducers: {
    deleteSongAction: (state, { payload }) => {
      state.song.isLoading = true;
      state.song.errors = '';
    },

    deleteSongSuccessAction: (state, { payload }) => {
      state.song.data = payload;
      state.song.isLoading = false;
      state.song.errors = '';
    },

    deleteSongErrorAction: (state, { payload: { error } }) => {
      state.song.isLoading = false;
      state.song.errors = error;
    },
  },
});

export const {
  deleteSongAction,
  deleteSongSuccessAction,
  deleteSongErrorAction,
} = deleteSongSlice.actions;

export default deleteSongSlice.reducer;
