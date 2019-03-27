import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
// import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
  animalsReducer,
  // menuReducer,
});
