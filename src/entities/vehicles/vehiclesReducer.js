import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

export default function (state = initialState.vehicles, action) {
  switch (action.type) {
    case types.FIND_ALL_VEHICLES_SUCCESS:
      return {...state, vehicles : action.vehicles}
    default:
      return state;
  }
}
