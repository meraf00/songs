import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songsInitialState = {
  songs: {
    data: [],
    isLoading: false,
    errors: '',
  },
};

export const getSongsSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    getSongsAction: (state) => {
      state.songs.isLoading = true;
      state.songs.data = [];
      state.songs.errors = '';
    },

    getSongsSuccessAction: (state, { payload }) => {
      state.songs.data = payload;
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    getSongsErrorAction: (state, { payload: { error } }) => {
      state.songs.isLoading = false;
      state.songs.errors = error;
    },
  },
});

export const { getSongsAction, getSongsSuccessAction, getSongsErrorAction } =
  getSongsSlice.actions;

export default getSongsSlice.reducer;
