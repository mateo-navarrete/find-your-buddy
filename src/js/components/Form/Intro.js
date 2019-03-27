import React from "react";

export const Intro = props => {
  return (
    <>
      <div>Intro</div>
      <div>Animal A# _</div>
      <div>Animal Name: _</div>
      <p>
        Animal Care Centers of NYC is a non-profit organization that is
        committed to finding appropriate homes for animals in our care. Pet
        ownership is a serious responsibility, and we strive to ensure that each
        person who adopts from us is aware of these responsibilities and is
        prepared to meet the pet’s needs. Therefore, the adoption process does
        take some time as our Adoption Counselors will review your application
        with you, answer all of your questions, and provide you with support and
        materials. Thank you in advance for your cooperation! Please note: You
        must be 18 years or older to adopt an animal.
      </p>
      <br />
      <button name="intro" onClick={props.handleNext}>
        next
      </button>
    </>
  );
};
