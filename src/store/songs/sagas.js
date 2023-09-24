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
  updateSongErrorAction,
  updateSongSuccessAction,
} from './slices';
import { put, takeLatest } from 'redux-saga/effects';
import {
  CREATE_SONG,
  DELETE_SONG,
  GET_MY_SONGS,
  GET_SONGS,
  GET_SONG_BY_ID,
  UPDATE_SONG,
} from './types';
import get, {
  getSongAction,
  getSongErrorAction,
  getSongSuccessAction,
} from './slices/get';

const instance = axios.create({
  baseURL: 'http://192.168.1.6:5000/songs',
});

function* getSongsSaga({ payload }) {
  let query = '';
  let page = 1;
  let limit = 10;
  if (payload?.queryString) {
    query = `&q=${payload?.queryString}`;
  }
  if (payload?.limit) {
    limit = payload.limit;
  }

  if (payload?.page) {
    page = payload.page;
  }
  try {
    const response = yield instance.get(
      `/?page=${page}&limit=${limit}${query}&`
    );

    if (response.status === 200) {
      yield put(getSongsSuccessAction(response.data));
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

function* updateSongSaga({ payload }) {
  if (!localStorage.getItem('token')) {
    yield put(createSongErrorAction("You're not logged in"));
  }

  try {
    const response = yield instance.put(`/${payload.id}`, payload.formData, {
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      yield put(getSongAction({ songId: payload.id }));
      yield put(updateSongSuccessAction(response.data));
    } else {
      yield put(updateSongErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(updateSongErrorAction(error));
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

function* getSongSaga({ payload: { songId } }) {
  try {
    const response = yield instance.get(`/${songId}`);

    if (response.status === 200) {
      yield put(getSongSuccessAction(response.data));
    } else {
      yield put(getSongErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(getSongErrorAction(error));
  }
}

function* watchSongs() {
  yield takeLatest(GET_SONGS, getSongsSaga);
  yield takeLatest(GET_SONG_BY_ID, getSongSaga);
  yield takeLatest(GET_MY_SONGS, getMySongsSaga);
  yield takeLatest(CREATE_SONG, createSongSaga);
  yield takeLatest(UPDATE_SONG, updateSongSaga);
  yield takeLatest(DELETE_SONG, deleteSongSaga);
}

export default watchSongs;
