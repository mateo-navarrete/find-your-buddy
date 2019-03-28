import React from "react";
import { withSingleAnimal } from "../../containers";

export const AnimalsPage = ({ data }) => {
  const renderAnimalInfo = data.map(pet => {
    if (data) {
    }
  });
  return (
    <>
      <div>AnimalPage</div>
    </>
  );
};

export const AnimalPage = withSingleAnimal(AnimalsPage);
