import axios from 'axios';
import {
  createUserErrorAction,
  createUserSuccessAction,
  getUserAction,
  getUserErrorAction,
  getUserSuccessAction,
  loginErrorAction,
  loginSuccessAction,
  logoutSuccessAction,
} from './slices';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_USER, LOGIN, LOGOUT, SIGNUP } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/auth',
});

function* getUserSaga() {
  if (!localStorage.getItem('token')) {
    yield put(getUserErrorAction("You're not logged in"));
  }
  try {
    const response = yield instance.get('/', {
      headers: { Authorization: localStorage.getItem('token') },
    });

    if (response.status === 200) {
      yield put(getUserSuccessAction(response.data));
    } else {
      yield put(getUserErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

function* loginSaga({ payload: { email, password } }) {
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

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      yield put(getUserAction());
      yield put(loginSuccessAction());
    } else {
      yield put(loginErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(loginErrorAction(error));
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

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      yield put(getUserAction());
      yield put(createUserSuccessAction(response.data));
    } else {
      yield put(createUserErrorAction(response.data.message));
    }
  } catch (error) {
    const msg = error.response.data.message ?? "Couldn't create user";
    yield put(createUserErrorAction(msg));
  }
}

function* logoutSaga() {
  localStorage.removeItem('token');

  yield put(logoutSuccessAction());
}

function* watchAuth() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, createUserSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

export default watchAuth;
