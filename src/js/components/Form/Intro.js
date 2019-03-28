import React from "react";
import { RadioGroup } from ".";

export const Intro = ({ id, label, options, ...props }) => {
  return (
    <>
      <div>1/6 Intro</div>
      <p>
        Animal A# (IS THIS TO BE AUTO CONNECTED VIA REDUX TO THE ANIMAL THE USER
        WANTS TO ADOPT?)
      </p>
      <p>
        Animal Name: (IS THIS TO BE AUTO CONNECTED VIA REDUX TO THE ANIMAL THE
        USER WANTS TO ADOPT?)
      </p>
      <p>
        Animal Care Centers of NYC is a non-profit organization that is
        committed to finding appropriate homes for animals in our care. Pet
        ownership is a serious responsibility, and we strive to ensure that each
        person who adopts from us is aware of these responsibilities and is
        prepared to meet the pet’s needs. Therefore, the adoption process does
        take some time as our Adoption Counselors will review your application
        with you, answer all of your questions, and provide you with support and
        materials. Thank you in advance for your cooperation!
      </p>
      <br />
      <form onChange={props.handleChange}>
        <RadioGroup id={id} label={label} options={options} />
      </form>
      <br />
      <button name="intro" onClick={props.handleNext}>
        next
      </button>
    </>
  );
};
