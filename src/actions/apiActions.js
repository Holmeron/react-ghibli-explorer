import * as types from './rootActionsTypes';

// select a film
export const selectFilmAction = (film) => ({
  type: types.SELECTED_FILM,
  film
});

// find all films
export const findAllFilms = (entity) => ({
  type: types.FIND_ALL_FILMS,
  entity
});
