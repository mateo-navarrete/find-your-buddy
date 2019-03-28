import React from "react";
// import { AnimalsPictures } from "./animalPictures";
import { AnimalDisplay } from "./AnimalDisplay";

export const AnimalDisplayList = ({ included, data }) => {
  let imgObj = {};
  included.forEach(pet => {
    if (pet.attributes.large) {
      imgObj[pet.id] = pet.attributes.large.url;
    }
  });

  const renderAnimals = data.map(pet => {
    let imgId = pet.relationships.pictures.data;
    if (imgId.length !== 0) {
      let petImg = imgId[0];
      let imgUrl = imgObj[petImg.id];
      if (pet.attributes.name) {
        return <AnimalDisplay key={pet.id} pet={pet} imgUrl={imgUrl} />;
      }
    }
  });

  return <>{renderAnimals}</>;
};

// let petImg = imgId[0];
// let imgUrl = imgObj[petImg.id];
// if (pet.attributes.name) {
//   return (
//     <div className  = "aAnimal" id = {pet.id} key={pet.id}>
//       <img className = "profileImg" src={imgUrl} />
//
//       <div className = "animal_info">
//
//       <p className = "animal_name"> {pet.attributes.name} </p>
//       {pet.attributes.sex === "Female" ? <div className = "sex"> <img  src="https://img.icons8.com/material/24/000000/female.png" /> </div> : <div className = "sex" ><img src="https://img.icons8.com/material/24/000000/male.png"/></div>}
//      {pet.meta.ageString ? <p> {pet.meta.ageString}</p> : null}
//       <p> {pet.meta.breedPrimary} </p>
//
//
//       </div>
//     </div>
//   );
// }
