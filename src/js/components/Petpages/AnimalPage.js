import React from "react";
import { withSingleAnimal } from "../../containers";

export const AnimalsPage = props => {
  console.log("@", props);
  return (
    <>
      <div>AnimalPage</div>
    </>
  );
};

export const AnimalPage = withSingleAnimal(AnimalsPage);
