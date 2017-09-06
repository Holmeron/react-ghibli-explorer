import * as types from './rootActionsTypes';

// select a film
export const selectFilmAction = (film) => ({
  type: types.SELECTED_FILM,
  film
});

// find all films
export const findAllFilms = () => ({
  type: types.FIND_ALL_FILMS
});
