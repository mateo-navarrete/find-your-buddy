import React from "react";
import { withDogs } from "../../containers";

import { AnimalDisplay } from "./animalDisplay";

// import "../../styles/animals.css";

const DogPage = ({ included, data }) => {
  // console.log("animals page", included);

  return (
    <>
      <div className="pageTitle"> Ya like Daaags? </div>
      <div className="animalContainer">
            <AnimalDisplay included={included} data={data} />
      </div>
    </>
  );
};

export const DogsPage = withDogs(DogPage);
