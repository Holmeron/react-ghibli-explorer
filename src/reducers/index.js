import { combineReducers } from 'redux';
import baseEntity from '../entities/baseEntity/baseEntityReducer';

const rootReducer = combineReducers({
  baseEntity
});

export default rootReducer;
