import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/rootActionsTypes';

import {findEntityByUrl, findAll, getWikipediaPageContent} from '../entities/baseEntity/baseEntitySaga';

/**
* Watch state by action type
*/

export function* watchFindByUrl(url) {
  yield takeEvery(types.FIND_ENTITY_URL, findEntityByUrl);
}
export function* watchFindAll(type) {
  yield takeEvery(types.FIND_ALL, findAll);
}
export function* watchGetWikipediaPageContent(name) {
  yield takeEvery(types.GET_WIKIPEDIA_CONTENT, getWikipediaPageContent);
}
