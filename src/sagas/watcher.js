import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/rootActionsTypes';

import {findEntityByUrl} from '../entities/baseEntity/baseEntitySaga';
import {findAll} from '../entities/baseEntity/baseEntitySaga';

export function* watchFindByUrl(url) {
  yield takeEvery(types.FIND_ENTITY_URL, findEntityByUrl);
}
export function* watchFindAll(type) {
  yield takeEvery(types.FIND_ALL, findAll);
}
