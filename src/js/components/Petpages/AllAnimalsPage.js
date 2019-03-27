import React from "react";
import { withAnimals } from "../containers";

const AllAnimalsPage = props => {
  return (
    <>
      <div> All Pets </div>
      <div>
        <ul>
          <li> all pets info go here</li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};
export const AnimalPage = withAnimals(AnimalsPage);
