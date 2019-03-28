import {
  GETTING_SINGLE_ANIMAL,
  GOT_SINGLE_ANIMAL_ERROR,
  GOT_SINGLE_ANIMAL
} from "../constants";

const initState = {
  data: [],

  meta: [],
  loading: false
};

export const singleAnimalReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_SINGLE_ANIMAL:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_SINGLE_ANIMAL_ERROR:
      console.log(action.payload);
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_SINGLE_ANIMAL:
      const { data, included, meta } = action.payload;
      nextState = {
        ...state,
        loading: true,
        data: data,
        meta: meta
      };
      console.log(nextState, action.payload);
      return nextState;
    default:
      return state;
  }
};
