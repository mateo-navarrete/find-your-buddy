import React from "react";
import { withAnimals } from "../containers";

export const AnimalsPictures = props => {

  const { included } = this.props;

  const renderPetImgs = included.map(pet => {
    if (pet.attributes.large) {
      return (
        <>
        <div>
          <img src {pet.attributes.large.url} alt=''/>
        </div>
        </>
      )
    }
  });
  return (
    <>
      <div>{renderPetImgs}</div>
    </>
  );
};
