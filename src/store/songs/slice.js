import { createSlice } from '@reduxjs/toolkit';
import { SONGS } from './types';

const songsInitialState = {
  songs: {
    data: [],
    isLoading: false,
    errors: '',
  },
};

export const songSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    getSongsAction: (state) => {
      state.songs.isLoading = true;
      state.songs.errors = '';
    },

    getSongByIdAction: (state, { payload: { id } }) => {
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    searchSongsAction: (state, { payload: { queryString } }) => {
      state.songs.isLoading = true;
      state.songs.errors = '';
    },

    createSongAction: (state, { paylaod: { song } }) => {
      state.isLoggedIn = true;
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    updateSongAction: (state, { payload: { song } }) => {
      state.songs.isLoading = true;
      state.songs.errors = '';
    },

    deleteSongAction: (state, { payload: { song } }) => {
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    songSuccessAction: (state, { payload }) => {
      state.songs.data = payload;
      state.songs.isLoading = false;
      state.songs.errors = '';
    },

    songErrorAction: (state, { payload: { error } }) => {
      state.songs.isLoading = false;
      state.songs.errors = error;
    },
  },
});

export const {
  getSongsAction,
  getSongByIdAction,
  searchSongsAction,
  createSongAction,
  updateSongAction,
  deleteSongAction,
  songSuccessAction,
  songErrorAction,
} = songSlice.actions;

export default songSlice.reducer;
