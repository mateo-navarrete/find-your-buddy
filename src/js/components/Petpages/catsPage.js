import React from "react";
import { WithCats } from "../../containers";
import { AnimalsPictures } from "./animalPictures";

const CatPage = ({ included }) => {
  // console.log("animals page", included);

  return (
    <>
      <div> All cats </div>
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

export const CatsPage = WithCats(CatPage);
