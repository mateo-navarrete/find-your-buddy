import { GETTING_DOGS, GOT_DOG_ERROR, GOT_DOGS } from "../constants";

const initState = {
  data: [],
  included: [],
  meta: [],
  loading: false
};

export const dogsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_DOGS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_DOG_ERROR:
      console.log(action.payload);
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_DOGS:
      const { data, included, meta } = action.payload;
      nextState = {
        ...state,
        loading: true,
        data: data,
        included: included,
        meta: meta
      };
      console.log(nextState, action.payload);
      return nextState;
    default:
      return state;
  }
};
