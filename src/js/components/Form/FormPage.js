import React from "react";
import { AdoptInfo, Household, Intro, Outro, Personal, PetStatus } from ".";

export const FormPage = props => {
  return (
    <>
      <div>Pet Adoption Questionnaire</div>
      <Intro />
      <Personal />
      <Household />
      <PetStatus />
      <AdoptInfo />
      <Outro />
    </>
  );
};
