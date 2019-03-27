import React from "react";
import { withAnimals } from "../../containers";

const AllAnimalPage = props => {
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

export const AllAnimalsPage = withAnimals(AllAnimalPage);
