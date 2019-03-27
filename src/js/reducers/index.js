import { combineReducers } from "redux";
import { catsReducer } from "./catsReducer";
import { dogsReducer } from "./dogsReducer";
// import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
  catsReducer,
  dogsReducer
});
