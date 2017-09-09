import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import apiService from '../../services/apiService';

export default function (state = initialState.baseEntity, action) {
  switch (action.type) {
    case types.FIND_ENTITY_URL_SUCCESS:
      const uniqueId = apiService.getUniqueIdFromUrl(action.entity.url) ;
      return {...state, [uniqueId] : action.entity}
    default:
      return state;
  }
}
