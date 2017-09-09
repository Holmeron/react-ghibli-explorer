import * as types from './rootActionsTypes';

// find entity by url
export const findEntityByUrl = (url) => ({
  type: types.FIND_ENTITY_URL,
  url
});

// find all by entity type
export const findAll = (entityType) => ({
  type: types.FIND_ALL,
  entityType
});
