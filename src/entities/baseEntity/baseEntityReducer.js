import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import appService from '../../services/appService';

/**
* react to the state dispatched by saga to resolves api calls responses
*/
export default function (state = initialState.baseEntity, action) {
  switch (action.type) {
    case types.FIND_ENTITY_URL_SUCCESS:
    // api inconsistency : url could be a string or an array :
    const entityUrl = typeof action.entity.url === 'string' ? action.entity.url : action.entity.url[0];
      const uniqueId = appService.getUniqueIdFromUrl(entityUrl) ;
      const validEntity = appService.validateEntity(action.entity);
      return {...state, [uniqueId] : validEntity}
    case types.FIND_ALL_SUCCESS:
    const url = typeof action.entities[0].url === 'string' ? action.entities[0].url : action.entities[0].url[0];
      const entityType = appService.getTypeFromUrl(url);
      let entities = action.entities
      if(entityType === 'films') entities = appService.sortByProperty(action.entities, 'release_date')
      return {...state, [entityType] : entities}
    default:
      return state;
  }
}
