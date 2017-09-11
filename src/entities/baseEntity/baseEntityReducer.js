import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import appService from '../../services/appService';

/**
* react to the state dispatched by saga to resolves api calls responses
*/
export default function (state = initialState.baseEntity, action) {
  switch (action.type) {

    case types.FIND_ENTITY_URL_SUCCESS:
    const entityUrl = typeof action.entity.url === 'string' ? action.entity.url : action.entity.url[0];
      const uniqueId = appService.getUniqueIdFromUrl(entityUrl) ;
      const validEntity = appService.validateEntity(action.entity);
      return {...state, [uniqueId] : validEntity}

    case types.FIND_ALL_SUCCESS:
      const url = typeof action.entities[0].url === 'string' ? action.entities[0].url : action.entities[0].url[0];
      const entityType = appService.getTypeFromUrl(url);
      let entities = action.entities;

      if(entityType === 'films'){
          // sort films by release_date
         entities = appService.sortByProperty(action.entities, 'release_date')
          // store directors and producers in state
          const persons = appService.ExtractPersonsFromFilms(entities);

          return {...state, [entityType] : entities, persons}
       }else{
        return {...state, [entityType] : entities}
      }

      case types.GET_WIKIPEDIA_CONTENT_SUCCESS:
        const person = appService.scrapContentFromWikipedia(action.pageContent);
        return {...state, test:person}
    default:
      return state;
  }
}
