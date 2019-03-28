import { GETTING_CATS, GOT_CAT_ERROR, GOT_CATS } from '../constants';
import { getAnimalData } from '../utils';
// import { refreshedAnimals } from '.';

export const gettingCats = () => {
  return { type: GETTING_CATS };
};

export const gotError = err => {
  return { type: GOT_CAT_ERROR, payload: err };
};

export const gotCats = cats => {
  return { type: GOT_CATS, payload: cats };
};

let animalApi = `https://api.rescuegroups.org/v5/public/animals/search/available/cats?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[colors]=name&fields[fosters]=name,email&fields[locations]=name&fields[patterns]=name&fields[pictures]=large,small&fields[species]=singular&fields[videos]=url&fields[videourls]=url,urlThumbnail&options=meta`;

export const getCats = api => dispatch => {
  dispatch(gettingCats());
  getAnimalData(animalApi, res => {
    res.data ? dispatch(gotCats(res)) : dispatch(gotError(res));
  });
};
