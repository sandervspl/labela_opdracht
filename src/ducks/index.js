// dependencies
import { combineReducers } from 'redux';

// reducers
import categoriesReducer from './modules/categories';

const allReducers = combineReducers({
  categories: categoriesReducer,
});

export default allReducers;
