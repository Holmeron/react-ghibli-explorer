import initialState from './initialState';
import * as types from '../actions/rootActionsTypes';

export default function (state = initialState.film, action) {
  switch (action.type) {
    default:
      return state;
  }
}
