import React from "react";
import { withAnimals } from "../../containers";

const AllAnimalPage = ({ included }) => {
  console.log("animals page", included);

  let count = 0;

  let renderPetImgs = included.map(pet => {
    count++;
    if (pet.attributes.large && count % 3 === 0) {
      let imgUrl = pet.attributes.large.url;

      return (
        <div key={pet.id}>
          <img src={imgUrl} alt="" />
        </div>
      );
    }
  });

  return (
    <>
      <div> All Pets </div>
      <div>
        <ul>
          <li> {renderPetImgs}</li>
          <li> something</li>
        </ul>
      </div>
    </>
  );
};

export const AllAnimalsPage = withAnimals(AllAnimalPage);
