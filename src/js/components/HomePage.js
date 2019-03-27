import React from "react";
import { WithCats } from "../containers";
import { PetImgs } from "./petImgs";

export const Home = props => {
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

export const HomePage = WithCats(Home);
