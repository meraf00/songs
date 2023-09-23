import axios from 'axios';
import { getSongsAction, songSuccessAction, songErrorAction } from './slice';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_MY_SONGS, GET_SONGS } from './types';

const instance = axios.create({
  baseURL: 'http://192.168.1.2:5000/songs',
});

function* getSongsSaga() {
  try {
    const response = yield instance.get('/');

    console.log(response);

    if (response.status === 200) {
      yield put(songSuccessAction(response.data.results));
    } else {
      yield put(songErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(songErrorAction(error));
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
      yield put(songSuccessAction(response.data.results));
    } else {
      yield put(songErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(songErrorAction(error));
  }
}

function* watchSongs() {
  yield takeLatest(GET_SONGS, getSongsSaga);
  yield takeLatest(GET_MY_SONGS, getMySongsSaga);
}

export default watchSongs;
