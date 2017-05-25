// api
import { getVehicles } from '../../api/api';

// actions
export const START = 'swapi/vehicles/START';
export const SUCCESS = 'swapi/vehicles/SUCCESS';
export const FAIL = 'swapi/vehicles/FAIL';


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
export const fetchVehicles = () => async (dispatch) => {
  // set fetch state to start
  dispatch(fetchStart());

  try {
    const payload = await getVehicles();

    // set state to result
    dispatch(fetchSuccess(payload));
  } catch (err) {
    // console.error(`VEHICLES ERROR: ${err}`);
    dispatch(fetchFail());
  }
};
