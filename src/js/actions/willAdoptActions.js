import { SET_WILL_ADOPT_ID } from '../constants';

export const setWillAdoptID = id => {
  return { type: SET_WILL_ADOPT_ID, payload: id };
};
