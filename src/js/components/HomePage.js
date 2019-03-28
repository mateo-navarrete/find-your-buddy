import React from "react";
import { withCats } from "../containers";
import { PetImgs } from "./petImgs";
import "../../styles/homePage.css";


import video1 from "../../images/cat_in_the_sun.mp4"



//Jacky 



export const Home = props => {
  return (
    <>
        <div className = "home_body">

        <div>
        <div className ="videoloop">
          <video className="videoloop2" autoPlay loop muted>
            <source className = "video" src={video1} type="video/mp4" />
          </video>
          </div>

        <div className = "body_title" >
        <div className = "box"> 
          <h1 className="fyb">Find Your Buddy</h1>
          <p className="about">
            Find your buddy is an app that make adoption accessible and simple.
            With a couple of click you can get closer on bringing one of these
            animals into their forever homes. Find your buddy here.
          </p>
          </div>
          </div>
          <div className = "hr" > 
          Will you take me  home today? 
          </div>
          </div>
          <div>
          <p></p>
          </div>
          <PetImgs />
          
      </div>

      
    </>
  );
};

export const HomePage = withCats(Home);



// <div>
//   <video className="videoloop" autoPlay loop muted>
//     <source src={video1} type="video/mp4" />
//   </video>
// </div>