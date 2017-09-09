import * as types from './rootActionsTypes';

// find entity by url
export const findEntityByUrl = (url) => ({
  type: types.FIND_ENTITY_URL,
  url
});

/** FILMS **/

// find all films
export const findAllFilms = () => ({
  type: types.FIND_ALL_FILMS
});
// find film
export const findFilm = (filmId) => ({
  type: types.FIND_FILM,
  filmId
});
// select a film
export const selectFilmAction = (film) => ({
  type: types.SELECTED_FILM,
  film
});


// find all species
export const findAllSpecies = () => ({
  type: types.FIND_ALL_SPECIES
});
// find all locations
export const findAllLocations = () => ({
  type: types.FIND_ALL_LOCATIONS
});
// find all terrains
export const findAllTerrains = () => ({
  type: types.FIND_ALL_TERRAINS
});
// find all people
export const findAllPeople = () => ({
  type: types.FIND_ALL_PEOPLE
});
// find all vehicles
export const findAllVehicles = () => ({
  type: types.FIND_ALL_VEHICLES
});
