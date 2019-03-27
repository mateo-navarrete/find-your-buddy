import React from "react";
import { WithCats } from "../../containers";
import { CatsPage } from "./catsPage";

<<<<<<< HEAD
import "../../../styles/animals.css"

const AllAnimalPage = ({ included }) => {
=======
const AllAnimalPage = props => {
>>>>>>> 6599b4f073d2e37c663c489458d24563f8666078
  // console.log("animals page", included);

  return (
    <>
      <div> All Pets </div>
      <div>
        <ul>
          <li>
            {" "}
            <CatsPage />{" "}
          </li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};

export const AllAnimalsPage = WithCats(AllAnimalPage);
