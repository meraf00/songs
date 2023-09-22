import { all, fork } from 'redux-saga/effects';
import watchAuth from './auth/sagas';

const rootSaga = function* () {
  yield all([fork(watchAuth)]);
};

export default rootSaga;
