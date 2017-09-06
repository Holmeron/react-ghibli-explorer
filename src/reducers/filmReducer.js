import initialState from './initialState';
import * as types from '../actions/rootActionsTypes';

export default function (state = initialState.films, action) {
  switch (action.type) {
    case types.SELECTED_FILM:
      return { ...state, selectedFilm: action.film };
    case types.FIND_ALL_FILMS_SUCCESS:
      return {...state, films : action.films}
    default:
      return state;
  }
}
