import { createSlice } from '@reduxjs/toolkit';
import { PLAYER } from './types';

const playerInitialState = {
  player: {
    isPlaying: false,
    song: null,
  },
};

export const playerSlice = createSlice({
  name: PLAYER,
  initialState: playerInitialState,
  reducers: {
    setSongAction: (state, { payload: { song } }) => {
      state.player.isPlaying = true;
      state.player.song = song;
    },

    playSongAction: (state) => {
      state.player.isPlaying = true;
    },

    pauseSongAction: (state) => {
      state.player.isPlaying = false;
    },

    stopSongAction: (state) => {
      state.player.isPlaying = false;
      state.player.song = null;
    },
  },
});

export const {
  setSongAction,
  playSongAction,
  pauseSongAction,
  stopSongAction,
} = playerSlice.actions;

export default playerSlice.reducer;
