import { SET_AGE } from '../../constants';

const initState = {
  id: 'is18',
  is18: false,
  label: 'Are you 18 years of age or older',
  options: [
    { id: 1, value: true, label: 'Yes ' },
    { id: 2, value: false, label: 'No ' },
  ],
  message: '',
};

export const ageReducer = (state = initState, action) => {
  let nextState;
  let is18;
  switch (action.type) {
    case SET_AGE:
      is18 = action.payload === 'true';
      // console.log(action.payload, is18);
      nextState = { ...state, is18: is18 };
      return nextState;
    default:
      return state;
  }
};
