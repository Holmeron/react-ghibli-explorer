import { fork } from 'redux-saga/effects';
import {watchFindAllFilms,watchFindAllVehicles} from './watcher';

export default function* startForman() {
  yield [fork(watchFindAllFilms),fork(watchFindAllVehicles)];
}
