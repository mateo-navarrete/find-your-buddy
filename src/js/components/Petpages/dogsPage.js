import React from "react";
import { WithDogs } from "../../containers";

import { AnimalDisplay } from "./animalDisplay";

// import "../../styles/animals.css";

const DogPage = ({ included, data }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> ya like daaags? </div>
      <div className="contentContainer">
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
