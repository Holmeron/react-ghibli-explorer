import { combineReducers } from 'redux';
import films from '../entities/films/filmsReducer';
import vehicles from '../entities/vehicles/vehiclesReducer';

const rootReducer = combineReducers({
  films,
  vehicles
});

export default rootReducer;
