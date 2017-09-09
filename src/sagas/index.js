import { fork } from 'redux-saga/effects';
import {
  watchFindAllFilms,
  watchFindFilm,
  watchFindAllVehicles,
  watchFindByUrl
} from './watcher';

export default function* startForman() {
  yield [
    fork(watchFindAllFilms),
    fork(watchFindFilm),
    fork(watchFindAllVehicles),
    fork(watchFindByUrl)
  ];
}
