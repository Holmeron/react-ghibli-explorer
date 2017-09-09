import { combineReducers } from 'redux';
import baseEntity from '../entities/baseEntity/baseEntityReducer';
import films from '../entities/films/filmsReducer';
import vehicles from '../entities/vehicles/vehiclesReducer';

const rootReducer = combineReducers({
  films,
  vehicles,
  baseEntity
});

export default rootReducer;
