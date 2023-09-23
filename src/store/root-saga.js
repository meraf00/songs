import { all, fork } from 'redux-saga/effects';
import watchAuth from './auth/sagas';
import watchSongs from './songs/sagas';

const rootSaga = function* () {
  yield all([fork(watchAuth), fork(watchSongs)]);
};

export default rootSaga;
