import React from "react";

let imgArr = [
  "https://s3.amazonaws.com/filestore.rescuegroups.org/1632/pictures/animals/10036/10036227/64405205_500x500.jpg",
  "https://s3.amazonaws.com/filestore.rescuegroups.org/5544/pictures/animals/10024/10024252/62687687_500x357.jpg",
  "https://s3.amazonaws.com/filestore.rescuegroups.org/3908/pictures/animals/10019/10019709/51238639_500x333.jpg",
  "https://s3.amazonaws.com/filestore.rescuegroups.org/4012/pictures/animals/10010/10010388/35872584_500x887.jpg"
];

export const PetImgs = props => {
  let displayPetImgs = imgArr.map((img, i) => {
    return (
      <div key={i + 1}>
        <img src={img} />
      </div>
    );
  });

  return (
    <>
      <div>
        <ul>
          <li>{displayPetImgs}</li>
        </ul>
      </div>
    </>
  );
};
