import { combineReducers } from "redux";
import { catsReducer } from "./catsReducer";
import { dogsReducer } from "./dogsReducer";
import { ageReducer } from "./forms";
import { singleAnimalReducer } from "./singleAnimalReducer";
export const rootReducer = combineReducers({
  catsReducer,
  dogsReducer,
  singleAnimalReducer,
  ageReducer
});
