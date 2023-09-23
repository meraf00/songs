import { createSlice } from '@reduxjs/toolkit';
import { AUTH } from './types';

const authInitialState = {
  isLoggedIn: false,
  user: {
    data: null,
    isLoading: true,
    errors: '',
  },
};

export const authSlice = createSlice({
  name: AUTH,
  initialState: authInitialState,
  reducers: {
    getUserAction: (state) => {
      state.user.isLoading = true;
      state.user.errors = '';
    },

    getUserSuccessAction: (state, { payload }) => {
      state.user.data = payload;
      state.isLoggedIn = true;
      state.user.isLoading = false;
      state.user.errors = '';
    },

    loginAction: (state, { payload }) => {
      console.log(payload, 'payload');
      state.user.isLoading = true;
      state.user.errors = '';
    },

    loginSuccessAction: (state) => {
      state.isLoggedIn = true;
      state.user.isLoading = false;
      state.user.errors = '';
    },

    createUserAction: (state, { payload: { email, password } }) => {
      state.user.isLoading = true;
      state.user.errors = '';
    },

    createUserSuccessAction: (state, { payload: { user } }) => {
      state.user.isLoading = false;
      state.user.data = user;
      state.user.errors = '';
    },

    authErrorAction: (state, { payload: { error } }) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
});

export const {
  getUserAction,
  createUserAction,
  loginAction,
  loginSuccessAction,
  getUserSuccessAction,
  createUserSuccessAction,
  authErrorAction,
} = authSlice.actions;

export default authSlice.reducer;
