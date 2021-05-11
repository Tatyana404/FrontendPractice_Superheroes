import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { values: hero } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...state.heroes, hero],
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default heroReducer;
