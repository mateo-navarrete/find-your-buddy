import React from "react";
import { PetImgs } from "./petImgs";

export const HomePage = props => {
  return (
    <>
      <div>
        <div>
          <h1> Find your pet</h1>
        </div>
        <div>
          {" "}
          <p>description </p>
          <div>
            <PetImgs />
          </div>
        </div>
      </div>
    </>
  );
};
