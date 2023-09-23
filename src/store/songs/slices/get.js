import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songInitialState = {
  song: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const getSongSlice = createSlice({
  name: SONGS,
  initialState: songInitialState,
  reducers: {
    getSongAction: (state, { payload }) => {
      state.song.isLoading = true;
      state.song.data = null;
      state.song.errors = '';
    },

    getSongSuccessAction: (state, { payload }) => {
      state.song.data = payload;
      state.song.isLoading = false;
      state.song.errors = '';
    },

    getSongErrorAction: (state, { payload: { error } }) => {
      state.song.isLoading = false;
      state.song.errors = error;
    },
  },
});

export const { getSongAction, getSongSuccessAction, getSongErrorAction } =
  getSongSlice.actions;

export default getSongSlice.reducer;
