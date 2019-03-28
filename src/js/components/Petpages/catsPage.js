import "../../../styles/animals.css";
import React from "react";
import { withCats } from "../../containers";
import { AnimalDisplayList } from "./AnimalDisplayList";

const CatPage = ({ included, data }) => {
  // console.log("animals page", data);

  return (
    <>
      <div className="pageTitle"> I need a home... </div>
      <div className="animalContainer">
        <AnimalDisplayList included={included} data={data} />
      </div>
    </>
  );
};

export const CatsPage = withCats(CatPage);
