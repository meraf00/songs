import { createSlice } from '@reduxjs/toolkit';
import { AUTH } from '../types';

const loginInitialState = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const loginSlice = createSlice({
  name: AUTH,
  initialState: loginInitialState,
  reducers: {
    loginAction: (state) => {
      state.user.data = null;
      state.user.isLoading = true;
      state.user.errors = '';
    },

    loginSuccessAction: (state) => {
      state.user.data = true;
      state.user.isLoading = false;
      state.user.errors = '';
    },

    loginErrorAction: (state, payload) => {
      state.user.data = false;
      state.user.isLoading = false;
      state.user.errors = payload;
    },
  },
});

export const { loginAction, loginSuccessAction, loginErrorAction } =
  loginSlice.actions;

export default loginSlice.reducer;
