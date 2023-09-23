import axios from 'axios';
import { getSongsAction, songSuccessAction, songErrorAction } from './slice';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_SONGS } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/songs',
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

function* watchSongs() {
  yield takeLatest(GET_SONGS, getSongsSaga);
}

export default watchSongs;
