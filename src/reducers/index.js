import { combineReducers } from 'redux';
import film from './filmReducer';
import species from './speciesReducer';

const rootReducer = combineReducers({
  film,
  species
});

export default rootReducer;
