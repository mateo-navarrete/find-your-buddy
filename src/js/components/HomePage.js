import React from "react";
import { withCats } from "../containers";
import { PetImgs } from "./petImgs";
import "../../styles/homePage.css";



//Jacky 


export const Home = props => {
  return (
    <>
      <div>
        <div>
          <h1 className="fyb">Find your pet</h1>
        </div>
        <div>
          {" "}
          <p className="about">
            Find your buddy is an app that make adoption accessible and simple.
            With a couple of click you can get closer on bringing one of these
            animals into their forever homes. Find your buddy here.
          </p>
          <div>
            <PetImgs />
          </div>
        </div>
      </div>
    </>
  );
};

export const HomePage = withCats(Home);
