import { put, call } from 'redux-saga/effects';
import { ghibliApi } from '../../Api/GhibliApi';
import { appService } from '../../services/appService';
import * as types from '../../actions/rootActionsTypes';

/**
* get entity by its url and dispatch the result in a state with proper action name
*/
export function* findEntityByUrl(action) {
  try {
    const entity = yield call(ghibliApi.findbyUrl,action.url);
    yield put({ type: types.FIND_ENTITY_URL_SUCCESS, entity })
  } catch (error) {
    console.log(error);
    yield put({ type: 'FIND_ENTITY_URL_ERROR', error });
  }
}

/**
* get all entities by type and dispatch the result in a state with proper action name
*/
export function* findAll(action) {
  try {
    const entities = yield call(ghibliApi.findAll,action.entityType);
    yield put({ type: types.FIND_ALL_SUCCESS, entities })
  } catch (error) {
    console.log(error);
    yield put({ type: 'FIND_ALL_ERROR', error });
  }
}
