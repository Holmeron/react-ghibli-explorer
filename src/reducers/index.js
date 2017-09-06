import { combineReducers } from 'redux';
import films from './filmReducer';
import species from './speciesReducer';

const rootReducer = combineReducers({
  films,
  species
});

export default rootReducer;
