import { SET_AGE } from '../../constants';

export const setAge = age => {
  return { type: SET_AGE, payload: age };
};
