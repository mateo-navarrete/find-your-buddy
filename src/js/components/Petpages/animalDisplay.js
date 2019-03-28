import React from "react";
import { AnimalsPictures } from "./animalPictures";

export const AnimalDisplay = ({ included, data }) => {
  let imgObj = {};
  included.forEach(pet => {
    if (pet.attributes.large) {
      imgObj[pet.id] = pet.attributes.large.url;
    }
  });

  // console.log("movie display", imgObj);
  // return imgObj;
  // };

  let renderAnimalInfo = data.map(pet => {
    let imgId = pet.relationships.pictures.data;

    if (imgId.length !== 0) {
      let petImg = imgId[0];
      let imgUrl = imgObj[petImg.id];
      if (pet.attributes.name) {
        return (
          <div className  = "aAnimal" key={pet.id}>
            <img src={imgUrl} />
            <p> {pet.attributes.name}</p>
            <p> {pet.attributes.sex}</p>
          </div>
        );
      }
    }
  });

  return (
    <>
      {renderAnimalInfo}
    </>
  );
};
