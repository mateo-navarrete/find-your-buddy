import React from "react";
import { withAnimals } from "../../containers";
import { AnimalsPictures } from "./animalPictures";

const AllAnimalPage = ({ included }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> All Pets </div>
      <div>
        <ul>
          <li>
            {" "}
            <AnimalsPictures included={included} />{" "}
          </li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};

export const AllAnimalsPage = withAnimals(AllAnimalPage);
