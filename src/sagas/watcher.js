import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/rootActionsTypes';

import {findAllFilms} from '../entities/films/filmsSaga';
import {findFilm} from '../entities/films/filmsSaga';
import {findAllVehicles} from '../entities/vehicles/vehiclesSaga';

import {findEntityByUrl} from '../entities/baseEntity/baseEntitySaga';
import {findAll} from '../entities/baseEntity/baseEntitySaga';

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
  yield takeEvery(types.FIND_ENTITY_URL, findEntityByUrl);
}
export function* watchFindAll(type) {
  yield takeEvery(types.FIND_ALL, findAll);
}
