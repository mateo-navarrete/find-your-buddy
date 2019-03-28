import React from "react";
import { withCats } from "../../containers";
import { AnimalDisplay } from "./animalDisplay";

const CatPage = ({ included, data }) => {
  console.log("animals page", data);

  return (
    <>
      <div> All cats </div>
      <div>
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

export const CatsPage = withCats(CatPage);
