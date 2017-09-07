import { takeLatest } from 'redux-saga/effects';
import * as ApiSaga from './ApiSaga';
import * as types from '../actions/rootActionsTypes';

export function* watchFindAllFilms() {
  yield takeLatest(types.FIND_ALL_FILMS, ApiSaga.findAllFilms);
}
export function* watchFindAllVehicles() {
  yield takeLatest(types.FIND_ALL_VEHICLES, ApiSaga.findAllVehicles);
}
