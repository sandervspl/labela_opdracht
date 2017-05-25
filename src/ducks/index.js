// dependencies
import { combineReducers } from 'redux';

// reducers
import categoriesReducer from './modules/categories';
import peopleReducer from './modules/people';
import vehiclesReducer from './modules/vehicles';

const allReducers = combineReducers({
  categories: categoriesReducer,
  people: peopleReducer,
  vehicles: vehiclesReducer,
});

export default allReducers;
