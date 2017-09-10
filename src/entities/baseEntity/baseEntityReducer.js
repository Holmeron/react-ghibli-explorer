import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import apiService from '../../services/apiService';

export default function (state = initialState.baseEntity, action) {
  switch (action.type) {
    case types.FIND_ENTITY_URL_SUCCESS:
      const uniqueId = apiService.getUniqueIdFromUrl(action.entity.url) ;
      return {...state, [uniqueId] : action.entity}
    case types.FIND_ALL_SUCCESS:
    // api inconsistency : url could be a string or an array :
    const url = typeof action.entities[0].url === 'string' ? action.entities[0].url : action.entities[0].url[0];
      const entityType = apiService.getTypeFromUrl(url) ;
      return {...state, [entityType] : action.entities}
    default:
      return state;
  }
}
