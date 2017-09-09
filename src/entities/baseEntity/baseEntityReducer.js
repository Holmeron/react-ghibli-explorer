import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

export default function (state = initialState.baseEntity, action) {
  switch (action.type) {
    case types.FIND_ENTITY_URL_SUCCESS:
      return {...state, entity : action.baseEntity}
    default:
      return state;
  }
}
