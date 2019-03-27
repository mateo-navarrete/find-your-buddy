import React from "react";
import { withAnimals } from "../containers";

const AnimalsPage = props => {
  return (
    <>
      <div>AnimalPage</div>
    </>
  );
};

export const AnimalPage = withAnimals(AnimalsPage);
