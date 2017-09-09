import { takeLatest } from 'redux-saga/effects';
import * as types from '../actions/rootActionsTypes';

import {findAllFilms} from '../entities/films/filmsSaga';
import {findEntityByUrl} from '../entities/baseEntity/baseEntitySaga';
import {findFilm} from '../entities/films/filmsSaga';
import {findAllVehicles} from '../entities/vehicles/vehiclesSaga';

export function* watchFindAllFilms() {
  yield takeLatest(types.FIND_ALL_FILMS, findAllFilms);
}
export function* watchFindFilm() {
  yield takeLatest(types.FIND_FILM, findFilm);
}
export function* watchFindAllVehicles() {
  yield takeLatest(types.FIND_ALL_VEHICLES, findAllVehicles);
}
export function* watchFindByUrl(url) {
  yield takeLatest(types.FIND_ENTITY_URL, findEntityByUrl);
}
