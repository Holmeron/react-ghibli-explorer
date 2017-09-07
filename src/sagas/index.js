import { fork } from 'redux-saga/effects';
import {
  watchFindAllFilms,
  watchFindFilm,
  watchFindAllVehicles
} from './watcher';

export default function* startForman() {
  yield [
    fork(watchFindAllFilms),
    fork(watchFindFilm),
    fork(watchFindAllVehicles)
  ];
}
