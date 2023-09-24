import { createSlice } from '@reduxjs/toolkit';
import { AUTH } from '../types';

const userInitialState = {
  user: {
    isLoggedIn: false,
    data: null,
    isLoading: true,
    errors: '',
  },
};

export const userSlice = createSlice({
  name: AUTH,
  initialState: userInitialState,
  reducers: {
    getUserAction: (state) => {
      state.user.isLoading = true;
      state.user.errors = '';
    },

    logoutAction: (state) => {
      state.user.isLoading = true;
      state.user.errors = '';
    },

    logoutSuccessAction: (state) => {
      state.user.isLoggedIn = false;
      state.user.data = null;
      state.user.isLoading = false;
      state.user.errors = '';
    },

    getUserSuccessAction: (state, { payload }) => {
      state.user.data = payload;
      state.user.isLoggedIn = true;
      state.user.isLoading = false;
      state.user.errors = '';
    },

    getUserErrorAction: (state, { payload: { error } }) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
});

export const {
  getUserAction,
  getUserSuccessAction,
  getUserErrorAction,
  logoutAction,
  logoutSuccessAction,
} = userSlice.actions;

export default userSlice.reducer;
