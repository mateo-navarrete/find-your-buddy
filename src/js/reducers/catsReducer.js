import { GETTING_CATS, GOT_CAT_ERROR, GOT_CATS } from '../constants';

const initState = {
  data: [],
  included: [],
  meta: [],
  loading: false,
};

export const catsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_CATS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_CAT_ERROR:
      console.log(action.payload);
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_CATS:
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
