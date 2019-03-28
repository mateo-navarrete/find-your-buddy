import {
  GETTING_SINGLE_ANIMAL,
  GOT_SINGLE_ANIMAL_ERROR,
  GOT_SINGLE_ANIMAL,
  SET_ANIMAL_ID,
  SET_ANIMAL_IMG
} from '../constants';

const initState = {
  data: [],
  selectedAnimalId: '',
  selectedAnimalImg: '',
  loading: false,
};

export const singleAnimalReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_ANIMAL_IMG:
      nextState = { ...state, selectedAnimalImg: action.payload };
      return nextState;
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
      };
      console.log(nextState, action.payload);
      return nextState;
    default:
      return state;
  }
};
