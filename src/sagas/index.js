import { fork } from 'redux-saga/effects';
import watchFindAll from './watcher';

export default function* startForman() {
  yield fork(watchFindAll);
}
