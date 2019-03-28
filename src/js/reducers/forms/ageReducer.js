import { SET_AGE } from '../../constants';

const initState = {
  // id: 'is18',
  isComplete: false,
  label: 'Are you 18 years of age or older',
  options: [
    { id: 1, value: true, label: 'Yes ' },
    { id: 2, value: false, label: 'No ' },
  ],
  message: '',
};

export const ageReducer = (state = initState, action) => {
  let nextState;
  let isComplete;
  switch (action.type) {
    case SET_AGE:
      isComplete = action.payload === 'true';
      // console.log(action.payload, isComplete);
      nextState = { ...state, isComplete: isComplete };
      return nextState;
    default:
      return state;
  }
};
