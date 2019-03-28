import { combineReducers } from 'redux';
import { catsReducer } from './catsReducer';
import { dogsReducer } from './dogsReducer';
import { willAdoptReducer } from './willAdoptReducer';
import { ageReducer } from './forms';

export const rootReducer = combineReducers({
  catsReducer,
  dogsReducer,
  willAdoptReducer,
  ageReducer,
});
