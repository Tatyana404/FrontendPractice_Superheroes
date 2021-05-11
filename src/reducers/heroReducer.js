import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return;
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      return;
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      return;
    }
    default:
      return state;
  }
}

export default heroReducer;
