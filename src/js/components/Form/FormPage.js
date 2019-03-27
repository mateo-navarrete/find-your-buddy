import React, { Component } from "react";
import { AdoptInfo, Household, Intro, Outro, Personal, PetStatus } from ".";

export default class FormPage extends Component {
  state = {
    intro: true,
    personal: false,
    household: false,
    petStatus: false,
    adoptInfo: false,
    outro: false
  };
  render() {
    const {
      intro,
      personal,
      household,
      petStatus,
      adoptInfo,
      outro
    } = this.state;
    console.log(this.state);
    return (
      <>
        <div>Pet Adoption Questionnaire</div>
        {intro ? <Intro /> : ""}
        {personal ? <Personal /> : ""}
        {household ? <Household /> : ""}
        {petStatus ? <PetStatus /> : ""}
        {adoptInfo ? <AdoptInfo /> : ""}
        {outro ? <Outro /> : ""}
      </>
    );
  }
}
