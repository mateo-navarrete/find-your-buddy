import {
  GETTING_SINGLE_ANIMAL,
  GOT_SINGLE_ANIMAL_ERROR,
  GOT_SINGLE_ANIMAL
} from "../constants";

import { getAnimalData } from "../utils";
// import { refreshedAnimals } from '.';

export const gettingSingleAnimal = () => {
  return { type: GETTING_SINGLE_ANIMAL };
};

export const gotError = err => {
  return { type: GOT_SINGLE_ANIMAL_ERROR, payload: err };
};

export const gotSingleAnimal = cats => {
  return { type: GOT_SINGLE_ANIMAL, payload: cats };
};

export const getSingleAnimal = animalId => dispatch => {
  let animalApi = `https://api.rescuegroups.org/v5/public/animals/${animalId}?fields[animals]=name,sex,ageString,descriptionText,sizeGroup,isKidsOk,isHousetrained,killDate,pictureCount,url,summary,pictureThumbnailUrl&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[colors]=name&fields[fosters]=name,email&fields[locations]=name&fields[patterns]=name&fields[pictures]=large,small&fields[species]=singular&fields[videos]=url&fields[videourls]=url,urlThumbnail&options=meta`;

  dispatch(gettingSingleAnimal());

  getAnimalData(animalApi, res => {
    res.data ? dispatch(gotSingleAnimal(res)) : dispatch(gotError(res));
  });
};
