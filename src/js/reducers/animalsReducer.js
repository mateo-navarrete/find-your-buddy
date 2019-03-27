import { GETTING_ANIMALS, GOT_ERROR, GOT_ANIMALS } from '../constants';

const initState = {
  data: [],
  included: [],
  meta: [],
  loading: false,
};

export const animalsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_ANIMALS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_ERROR:
      console.log(action.payload);
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_ANIMALS:
      const { data, included, meta } = action.payload;
      nextState = {
        ...state,
        loading: true,
        data: data,
        included: included,
        meta: meta,
      };
      console.log(nextState, action.payload);
      return nextState;
    default:
      return state;
  }
};
