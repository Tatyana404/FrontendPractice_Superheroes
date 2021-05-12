import ACTION_TYPES from './actionTypes';

export const createHeroRequest = values => ({
  type: ACTION_TYPES.CREATE_HERO_REQUEST,
  values,
});

export const createHeroSuccess = values => ({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  values,
});

export const createHeroError = error => ({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  error,
});
