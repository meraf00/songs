import axios from 'axios';
import {
  authErrorAction,
  createUserSuccessAction,
  getUserAction,
  getUserSuccessAction,
  loginSuccessAction,
} from './slice';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_USER, LOGIN, LOGOUT, SIGNUP } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/auth',
});

function* getUserSaga() {
  try {
    const response = yield instance.get('/', {
      headers: { Authorization: localStorage.getItem('token') },
    });

    if (response.status == 200) {
      yield put(getUserSuccessAction(response.data));
    } else {
      yield put(authErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(authErrorAction(error));
  }
}

function* loginSaga({ paylaod: { email, password } }) {
  try {
    const response = yield instance.post(
      '/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status == 200) {
      localStorage.setItem('token', response.data.token);
      yield put(getUserAction());
      yield put(loginSuccessAction());
    } else {
      yield put(authErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(authErrorAction(error));
  }
}

function* createUserSaga({ payload: { password, email } }) {
  try {
    const response = yield instance.post(
      '/signup',
      { email, password },
      {
        Authorization: 'application/json',
      }
    );

    if (response.status == 201) {
      localStorage.setItem('token', response.data.token);
      yield put(getUserAction());
      yield put(createUserSuccessAction());
    } else {
      yield put(authErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(authErrorAction(error));
  }
}

function* logoutSaga() {
  try {
    const response = yield instance.get('/', {
      headers: { Authorization: localStorage.getItem('token') },
    });

    if (response.status == 200) {
      yield put(getUserSuccessAction(response.data));
    } else {
      yield put(authErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(authErrorAction(error));
  }
}

function* watchAuth() {
  takeLatest(GET_USER, getUserSaga);
  takeLatest(LOGIN, loginSaga);
  takeLatest(SIGNUP, createUserSaga);
  takeLatest(LOGOUT, logoutSaga);
}

export default watchAuth;
