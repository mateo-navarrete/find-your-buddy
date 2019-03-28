import React from "react";
import { WithDogs } from "../../containers";
import { AnimalsPictures } from "./animalPictures";
// import "../../styles/animals.css";



const DogPage = ({ included }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> ya like daaags? </div>
      <div className = "contentContainer">
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
