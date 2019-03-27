import React from "react";
import { withAnimals } from "../containers";

export const Home = props => {
  return (
    <>
      <div>HomePage</div>
    </>
  );
};

export const HomePage = withAnimals(Home);
