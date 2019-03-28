import React from "react";
import { Link } from "react-router-dom";

import { Animal } from "./Animal";

// import { AnimalsPictures } from './AnimalPictures';

// const mapStateToProps = state => {
//   return {
//     selectedAnimalId: state.catsReducer.selectedAnimalId,
//     selectedAnimalImg: state.catsReducer.selectedAnimalImg
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     setAnimalId: id => {
//       dispatch(setAnimalId(id));
//     }
//   };
// };

export const AnimalDisplay = ({ pet, imgUrl, ...props }) => {
  let animalUrl = `/animals/${pet.id}`;

  return (
    <div>
      <Link className = "animals_links" to={animalUrl}>
        <Animal pet={pet} imgUrl={imgUrl} {...props} />
      </Link>
    </div>
  );
};
