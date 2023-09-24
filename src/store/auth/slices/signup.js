import { createSlice } from '@reduxjs/toolkit';
import { AUTH } from '../types';

const signUpInitialState = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const signUpSlice = createSlice({
  name: AUTH,
  initialState: signUpInitialState,
  reducers: {
    createUserAction: (state, { payload: { email, password } }) => {
      state.user.data = null;
      state.user.isLoading = true;
      state.user.errors = '';
    },

    createUserSuccessAction: (state, payload) => {
      state.user.isLoading = false;
      state.user.data = true;
      state.user.errors = '';
    },

    createUserErrorAction: (state, { payload }) => {
      state.user.data = null;
      state.user.isLoading = false;
      state.user.errors = payload;
    },
  },
});

export const {
  createUserAction,
  createUserSuccessAction,
  createUserErrorAction,
} = signUpSlice.actions;

export default signUpSlice.reducer;
