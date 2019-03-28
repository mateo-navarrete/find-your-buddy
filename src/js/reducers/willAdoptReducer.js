import { SET_WILL_ADOPT_ID } from '../constants';

const initState = {
  willAdoptId: '',
};

export const willAdoptReducer = (state = initState, action) => {
  let nextState;
  // let isComplete;
  switch (action.type) {
    case SET_WILL_ADOPT_ID:
      nextState = { ...state, willAdoptId: action.payload };
      //   isComplete = action.payload === 'true';
      //   // console.log(action.payload, isComplete);
      //   nextState = { ...state, isComplete: isComplete };
      return nextState;
    default:
      return state;
  }
};
