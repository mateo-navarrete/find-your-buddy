import React from 'react';
// import { AnimalsPictures } from './AnimalPictures';
import { withWillAdopt, withSingleAnimal } from '../../containers';

export const Animals = ({ pet, imgUrl, ...props }) => {
  // console.log("imgurl", imgUrl);
  let animalUrl = `/animals/${pet.id}`;

  return (
    <div
      className="aAnimal"
      id={pet.id}
      key={pet.id}
      onClick={() => {
        props.setWillAdoptID(pet.id);
        props.getSingleAnimal(pet.id);
      }}
    >
      <img className="profileImg" src={imgUrl} />

      <div className="animal_info">
        <p className="animal_name"> {pet.attributes.name} </p>
        {pet.attributes.sex === 'Female' ? (
          <div className="sex">
            {' '}
            <img src="https://img.icons8.com/material/24/000000/female.png" />{' '}
          </div>
        ) : (
          <div className="sex">
            <img src="https://img.icons8.com/material/24/000000/male.png" />
          </div>
        )}
        {pet.meta.ageString ? <p> {pet.meta.ageString}</p> : null}
        <p> {pet.meta.breedPrimary} </p>
      </div>
    </div>
  );
};

export const Animal = withWillAdopt(withSingleAnimal(Animals));
