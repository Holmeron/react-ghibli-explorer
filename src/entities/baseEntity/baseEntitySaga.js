import { put, call } from 'redux-saga/effects';
import { ghibliApi } from '../../Api/GhibliApi';
import { apiService } from '../../services/apiService';
import * as types from '../../actions/rootActionsTypes';

export function* findEntityByUrl(action) {
  try {
    const entity = yield call(ghibliApi.findbyUrl,action.url);
    yield put({ type: types.FIND_ENTITY_URL_SUCCESS, entity })
  } catch (error) {
    console.log(error);
    yield put({ type: 'FIND_ENTITY_URL_ERROR', error });
  }
}
