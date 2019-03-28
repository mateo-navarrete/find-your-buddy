import React from "react";
import { WithDogs } from "../../containers";
<<<<<<< HEAD
import { AnimalDisplay } from "./animalDisplay";
=======
import { AnimalsPictures } from "./animalPictures";
// import "../../styles/animals.css";


>>>>>>> 2ae2556c96574181056bab9c177cc1732d057324

const DogPage = ({ included, data }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> ya like daaags? </div>
      <div className = "contentContainer">
        <ul>
          <li>
            {" "}
            <AnimalDisplay included={included} data={data} />{" "}
          </li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};

export const DogsPage = WithDogs(DogPage);
