import { takeLatest } from 'redux-saga/effects';
import { findAllFilms } from './findAllFilmsSaga';
import * as types from '../actions/rootActionsTypes';

export default function* watchFindAllFilms() {
  yield takeLatest(types.FIND_ALL_FILMS, findAllFilms);
}
