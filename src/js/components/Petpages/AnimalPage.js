import React from "react";
import { withSingleAnimal } from "../../containers";

export const AnimalsPage = ({ data }) => {
  const renderAnimalInfo = data.map(pet => {
    if (data) {
    }
  });
  return (
    <>
      <div className = "aprofile">
      <div className = "aprofile_grid">
        <img src= "https://s3.amazonaws.com/filestore.rescuegroups.org/5166/pictures/animals/10006/10006340/59898875_500x667.jpg" />

        <div className = "grid_info">
        <h1> <b>Name:</b> <p>Alfred</p> </h1> 
        
        <h1> <b>Type:</b> <p>Domestic Short Type</p> </h1> 

        <h1> <b>Sex:</b> <p>Male</p> </h1> 

        <h1> <b>Location:</b> <p>New York</p> </h1> 

        <h1> <b>Kids Friendly: </b> <p>Yes </p></h1> 

        <h1> <b>Description:</b> </h1> 
        <p>
I have the best grumpy face out there - Grumpy Cat look out as I could have my own empire. I am not really grumpy but my little fat apple cheeks make me look a tad disgruntled. I try to act like a diva sometimes but really all I want is your lap, some pets and treats - ooooh I love my treats. I am partial to toy mice and stuffed animals as well. I am tolerant of other cats and mellow dogs but want to know that I am safe and loved and have my own spot to get to for napping. Napping is important - it keeps me this adorable.

</p>
</div>
</div>

      
      
      
      </div>

    </>
  );
};

export const AnimalPage = withSingleAnimal(AnimalsPage);
