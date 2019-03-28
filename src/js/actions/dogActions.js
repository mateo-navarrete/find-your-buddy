import { GETTING_DOGS, GOT_DOG_ERROR, GOT_DOGS } from '../constants';
import { getAnimalData } from '../utils';
// import { refreshedAnimals } from '.';

export const gettingDogs = () => {
  return { type: GETTING_DOGS };
};

export const gotError = err => {
  return { type: GOT_DOG_ERROR, payload: err };
};

export const gotDogs = dogs => {
  return { type: GOT_DOGS, payload: dogs };
};

let animalApi = `https://api.rescuegroups.org/v5/public/animals/search/available/dogs?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[colors]=name&fields[fosters]=name,email&fields[locations]=name&fields[patterns]=name&fields[pictures]=large,small&fields[species]=singular&fields[videos]=url&fields[videourls]=url,urlThumbnail&options=meta`;

export const getDogs = api => dispatch => {
  dispatch(gettingDogs());
  getAnimalData(animalApi, res => {
    res.data ? dispatch(gotDogs(res)) : dispatch(gotError(res));
  });
};
