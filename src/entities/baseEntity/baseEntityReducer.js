import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import apiService from '../../services/apiService';

export default function (state = initialState.baseEntity, action) {
  switch (action.type) {
    case types.FIND_ENTITY_URL_SUCCESS:
      const uniqueId = apiService.getUniqueIdFromUrl(action.entity.url) ;
      return {...state, [uniqueId] : action.entity}
    case types.FIND_ALL_SUCCESS:
      const entityType = apiService.getTypeFromUrl(action.entities[0].url) ;
      return {...state, [entityType] : action.entities}
    default:
      return state;
  }
}
