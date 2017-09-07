import { put, call } from 'redux-saga/effects';
import { ghibliApi } from '../../Api/GhibliApi';
import * as types from '../../actions/rootActionsTypes';

export function* findAllVehicles() {
  try {
    const vehicles = yield call(ghibliApi.findAll,'vehicles');
    yield put({ type: types.FIND_ALL_VEHICLES_SUCCESS, vehicles })
  } catch (error) {
    yield put({ type: 'FIND_ALL_VEHICLES_ERROR', error });
  }
}
