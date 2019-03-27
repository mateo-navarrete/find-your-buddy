import React from "react";
import { WithDogs } from "../../containers";
import { AnimalsPictures } from "./animalPictures";

const DogPage = ({ included }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> ya like daaags? </div>
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

export const DogsPage = WithDogs(DogPage);
