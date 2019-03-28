// import { SET_ADDRESS } from '../../constants';

const initState = {
  id: 'contactForm',
  isComplete: false,
  label: 'Contact & Household Information',
  options: [
    { id: 1, value: true, label: 'Yes ' },
    { id: 2, value: false, label: 'No ' },
  ],
  message: '',
};

export const contactReducer = (state = initState, action) => {
  let nextState;
  let isComplete;
  switch (action.type) {
    // case SET_ADDRESS:
    //   is18 = action.payload === 'true';
    //   // console.log(action.payload, is18);
    //   nextState = { ...state, is18: is18 };
    //   return nextState;
    default:
      return state;
  }
};
