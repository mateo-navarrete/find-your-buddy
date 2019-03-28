import { GETTING_ANIMALS, GOT_ERROR, GOT_ANIMALS } from '../constants';
import { getAnimalData } from '../utils';
// import { refreshedAnimals } from '.';

export const gettingAnimals = () => {
  return { type: GETTING_ANIMALS };
};

export const gotError = err => {
  return { type: GOT_ERROR, payload: err };
};

export const gotAnimals = animals => {
  return { type: GOT_ANIMALS, payload: animals };
};

let animalApi = `https://api.rescuegroups.org/v5/public/animals/search/available/cats?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[colors]=name&fields[fosters]=name,email&fields[locations]=name&fields[patterns]=name&fields[pictures]=large,small&fields[species]=singular&fields[videos]=url&fields[videourls]=url,urlThumbnail&options=meta`;

export const getCats = api => dispatch => {
  dispatch(gettingAnimals());
  getAnimalData(animalApi, res => {
    res.data ? dispatch(gotAnimals(res)) : dispatch(gotError(res));
  });
};
