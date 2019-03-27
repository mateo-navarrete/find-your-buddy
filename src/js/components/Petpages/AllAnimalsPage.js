import React from "react";
import { WithCats } from "../../containers";
import { CatsPage } from "./catsPage";
import "../../../styles/animals.css"

const AllAnimalPage = props => {
  // console.log("animals page", included);

  return (
    <>
      <div> All Pets </div>
      <div>
        <ul>
          <li>
            <CatsPage />
          </li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};

export const AllAnimalsPage = WithCats(AllAnimalPage);
