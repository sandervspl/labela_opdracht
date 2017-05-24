// dependencies
import { combineReducers } from 'redux';

// reducers
import categoriesReducer from './modules/categories';
import peopleReducer from './modules/people';

const allReducers = combineReducers({
  categories: categoriesReducer,
  people: peopleReducer,
});

export default allReducers;
