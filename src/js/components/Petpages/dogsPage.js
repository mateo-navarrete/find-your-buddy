import React from "react";
import { withDogs } from "../../containers";

import { AnimalDisplayList } from "./AnimalDisplayList";

// import "../../styles/animals.css";

const DogPage = ({ included, data }) => {
  // console.log("animals page", included);

  return (
    <>
      <div className="pageTitle"> Will you adopt me? </div>
      <div className="animalContainer">
        <AnimalDisplayList included={included} data={data} />
      </div>
    </>
  );
};

export const DogsPage = withDogs(DogPage);
