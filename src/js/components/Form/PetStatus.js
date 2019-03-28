import React from "react";

export const PetStatus = props => {
  return (
    <>
      <div>4/6 PetStatus</div>
      <div>LIST BELOW ALL PETS CURRENTLY LIVING IN YOUR HOUSEHOLD </div>
      <div>Species/Breed? </div>

      <div>Owned how long? </div>
      <div>Age? </div>
      <div>Sex? </div>
      <div>Spayed / Neutered? </div>
      <div> Current on vaccinations? </div>
      <div>Kept indoors or outdoors? </div>
      <div>LIST BELOW PETS THAT YOU HAVE PREVIOUSLY OWNED </div>
      <div>Species/Breed? </div>
      <div>Owned how long? </div>
      <div> Age? </div>
      <div>Spayed/Neutered? </div>
      <div>Kept indoors or outdoors? </div>
      <div>What happened to him/her? </div>
      <div>VETERINARY/CLINIC </div>
      <div>
        {" "}
        NAME AND PHONE NUMBER:
        __________________________________________________________________________________________{" "}
      </div>
      <div>
        PERSONAL REFERENCES: Name Relationship to Adopter Contact information
      </div>
      <br />
      <button name="petStatus" onClick={props.handleBack}>
        back
      </button>
      <button name="petStatus" onClick={props.handleNext}>
        next
      </button>
    </>
  );
};
