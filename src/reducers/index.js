import { combineReducers } from 'redux';
import films from './filmReducer';
import species from './speciesReducer';
import vehicles from './vehiclesReducer';

const rootReducer = combineReducers({
  films,
  species,
  vehicles
});

export default rootReducer;
