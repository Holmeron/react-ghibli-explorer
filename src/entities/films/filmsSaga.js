import { put, call } from 'redux-saga/effects';
import { ghibliApi } from '../../Api/GhibliApi';
import * as types from '../../actions/rootActionsTypes';

export function* findAllFilms() {
  try {
    const films = yield call(ghibliApi.findAll,'films');
    yield put({ type: types.FIND_ALL_FILMS_SUCCESS, films })
  } catch (error) {
    yield put({ type: 'FIND_ALL_FILMS_ERROR', error });
  }
}