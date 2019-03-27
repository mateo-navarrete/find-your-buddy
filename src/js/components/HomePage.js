import React from "react";
import { withAnimals } from "../containers";
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
  );
};

export const HomePage = withAnimals(Home);
