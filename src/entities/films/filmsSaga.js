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
export function* findFilm( action ) {
  try {
    const film = yield call(ghibliApi.findSingle,'films', action.filmId);
    yield put({ type: types.FIND_FILM_SUCCESS, film })
  } catch (error) {
    yield put({ type: 'FIND_FILM_ERROR', error });
  }
}
