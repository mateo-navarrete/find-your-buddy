import React from 'react';
import { Animal } from './Animal';
// import { withWillAdopt } from '../../containers';

export const AnimalDisplay = ({ pet, imgUrl, ...props }) => {
  return <Animal pet={pet} imgUrl={imgUrl} {...props} />;
};

// export const AnimalDisplay = withWillAdopt(AnimalsDisplay);

// <div className="aAnimal" id={pet.id} key={pet.id}>
//   <img className="profileImg" src={imgUrl} />
//
//   <div className="animal_info">
//     <p className="animal_name"> {pet.attributes.name} </p>
//     {pet.attributes.sex === "Female" ? (
//       <div className="sex">
//         {" "}
//         <img src="https://img.icons8.com/material/24/000000/female.png" />{" "}
//       </div>
//     ) : (
//       <div className="sex">
//         <img src="https://img.icons8.com/material/24/000000/male.png" />
//       </div>
//     )}
//     {pet.meta.ageString ? <p> {pet.meta.ageString}</p> : null}
//     <p> {pet.meta.breedPrimary} </p>
//   </div>
// </div>
