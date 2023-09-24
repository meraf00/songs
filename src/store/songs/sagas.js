import axios from 'axios';
import {
  getSongsAction,
  getSongsSuccessAction,
  getSongsErrorAction,
  getMySongsSuccessAction,
  getMySongsErrorAction,
  createSongErrorAction,
  createSongSuccessAction,
  deleteSongErrorAction,
  deleteSongSuccessAction,
  getMySongsAction,
} from './slices';
import { put, takeLatest } from 'redux-saga/effects';
import { CREATE_SONG, DELETE_SONG, GET_MY_SONGS, GET_SONGS } from './types';
import get from './slices/get';

const instance = axios.create({
  baseURL: 'http://192.168.1.6:5000/songs',
});

function* getSongsSaga() {
  try {
    const response = yield instance.get('/');

    if (response.status === 200) {
      yield put(getSongsSuccessAction(response.data.results));
    } else {
      yield put(getSongsErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(getSongsErrorAction(error));
  }
}

function* getMySongsSaga() {
  try {
    const response = yield instance.get('/uploads', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    if (response.status === 200) {
      yield put(getMySongsSuccessAction(response.data.results));
    } else {
      yield put(getMySongsErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(getMySongsErrorAction(error));
  }
}

function* createSongSaga({ payload }) {
  if (!localStorage.getItem('token')) {
    yield put(createSongErrorAction("You're not logged in"));
  }

  try {
    const response = yield instance.post('/', payload.formData, {
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      yield put(createSongSuccessAction(response.data));
    } else {
      yield put(createSongErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(createSongErrorAction(error));
  }
}

function* deleteSongSaga({ payload: { song } }) {
  if (!localStorage.getItem('token')) {
    yield put(createSongErrorAction("You're not logged in"));
  }

  try {
    const response = yield instance.delete(`/${song.id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    if (response.status === 200) {
      yield put(getMySongsAction());
      yield put(deleteSongSuccessAction(response.data));
    } else {
      yield put(deleteSongErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(deleteSongErrorAction(error));
  }
}

function* watchSongs() {
  yield takeLatest(GET_SONGS, getSongsSaga);
  yield takeLatest(GET_MY_SONGS, getMySongsSaga);
  yield takeLatest(CREATE_SONG, createSongSaga);
  yield takeLatest(DELETE_SONG, deleteSongSaga);
}

export default watchSongs;
