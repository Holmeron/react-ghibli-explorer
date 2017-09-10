import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

import appService from '../../services/appService';

/**
* react to the state dispatched by saga to resolves api calls responses
*/
export default function (state = initialState.baseEntity, action) {
  switch (action.type) {

    case types.FIND_ENTITY_URL_SUCCESS:
      const uniqueId = appService.getUniqueIdFromUrl(action.entity.url) ;
      const validEntity = appService.validateEntity(action.entity);
      return {...state, [uniqueId] : validEntity}

    case types.FIND_ALL_SUCCESS:
      const entityType = appService.getTypeFromUrl(action.entities[0].url);
      let entities = action.entities

      if(entityType === 'films'){
          // sort films by release_date
         entities = appService.sortByProperty(action.entities, 'release_date')
          // store directors and producers in state
          const persons = appService.ExtractPersonsFromFilms(entities);

          return {...state, [entityType] : entities, persons}
       }else{
        return {...state, [entityType] : entities, persons}
      }

      case types.GET_WIKIPEDIA_CONTENT_SUCCESS:
        const person = appService.scrapContentFromWikipedia(action.pageContent);
        return {...state, test:person}
    default:
      return state;
  }
}
