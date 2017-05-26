// api
import { getCategories } from 'api';

// actions
export const START = 'swapi/categories/START';
export const SUCCESS = 'swapi/categories/SUCCESS';
export const FAIL = 'swapi/categories/FAIL';


// state
export const initialState = {
  loading: false,
  error: false,
  loaded: false,
  errorMessage: '',
  list: {},
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        error: false,
        loaded: false,
        errorMessage: '',
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        errorMessage: '',
        list: action.payload,
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        loaded: false,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

// action creators
const fetchStart = () => ({
  type: START,
});

const fetchSuccess = payload => ({
  type: SUCCESS,
  payload,
});

const fetchFail = (errorMessage = 'Unable to connect to SWAPI.') => ({
  type: FAIL,
  errorMessage,
});

// async actions
export const fetchCategories = () => async (dispatch) => {
  // set fetch state to start
  dispatch(fetchStart());

  try {
    const payload = await getCategories();
    console.log(payload);

    // set state to result
    dispatch(fetchSuccess(payload));
  } catch (err) {
    // console.error(`CATEGORIES ERROR: ${err}`);
    dispatch(fetchFail());
  }
};
