import React from "react";

export const AnimalsPictures = ({ included }) => {
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
      <div>{renderPetImgs}</div>
    </>
  );
};
