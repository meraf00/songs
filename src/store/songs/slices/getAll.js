import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from '../types';

const songsInitialState = {
  songs: {
    page: 1,
    limit: 10,
    hasPrev: false,
    hasNext: false,
    data: [],
    isLoading: false,
    errors: '',
  },
};

export const getSongsSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    getSongsAction: (state, paylaod) => {
      state.songs.isLoading = true;
      state.songs.data = [];
      state.songs.hasNext = false;
      state.songs.hasPrev = false;
      state.songs.page = 1;
      state.songs.limit = 10;
      state.songs.errors = '';
    },

    getSongsSuccessAction: (
      state,
      { payload: { results, hasNext, hasPrev, page, limit } }
    ) => {
      state.songs.data = results;
      state.songs.hasNext = hasNext;
      state.songs.hasPrev = hasPrev;
      state.songs.page = page;
      state.songs.limit = limit;
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
