import initialState from '../../reducers/initialState';
import * as types from '../../actions/rootActionsTypes';

export default function (state = initialState.films, action) {
  switch (action.type) {
    case types.SELECTED_FILM:
      return { ...state, selectedFilm: action.film };
    case types.FIND_ALL_FILMS_SUCCESS:
      return {...state, films : action.films}
    case types.FIND_FILM_SUCCESS:
      return {...state, film : action.film}
    default:
      return state;
  }
}
