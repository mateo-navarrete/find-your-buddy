import React, { Component } from "react";
import { AdoptInfo, Household, Intro, Outro, Personal, PetStatus } from ".";

export default class FormPage extends Component {
  state = {
    intro: true,
    personal: false,
    household: false,
    petStatus: false,
    adoptInfo: false,
    outro: false,
    is18Label: "Are you 18 years of age or older",
    is18Options: [
      { id: 1, value: "Yes", label: "Yes " },
      { id: 2, value: "No", label: "No " }
    ],
    message: ""
  };
  handleNext = e => {
    const { name } = e.target;
    const nextSection = {
      // outro: "intro",
      intro: "personal",
      personal: "household",
      household: "petStatus",
      petStatus: "adoptInfo",
      adoptInfo: "outro"
    };
    this.setState({ [name]: false, [nextSection[name]]: true });
  };
  handleBack = e => {
    const { name } = e.target;
    const backSection = {
      // intro: "outro",
      personal: "intro",
      household: "personal",
      petStatus: "household",
      adoptInfo: "petStatus",
      outro: "adoptInfo"
    };
    this.setState({ [name]: false, [backSection[name]]: true });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      message: ""
    });
  };
  render() {
    const {
      intro,
      personal,
      household,
      petStatus,
      adoptInfo,
      outro,
      is18Label,
      is18Options,
      message
    } = this.state;
    console.log(this.state);
    return (
      <>
        <div>Pet Adoption Questionnaire</div>
        {intro ? (
          <Intro
            handleNext={this.handleNext}
            handleChange={this.handleChange}
            id="is18"
            label={is18Label}
            options={is18Options}
            message={message}
          />
        ) : (
          ""
        )}
        {personal ? (
          <Personal handleNext={this.handleNext} handleBack={this.handleBack} />
        ) : (
          ""
        )}
        {household ? (
          <Household
            handleNext={this.handleNext}
            handleBack={this.handleBack}
          />
        ) : (
          ""
        )}
        {petStatus ? (
          <PetStatus
            handleNext={this.handleNext}
            handleBack={this.handleBack}
          />
        ) : (
          ""
        )}
        {adoptInfo ? (
          <AdoptInfo
            handleNext={this.handleNext}
            handleBack={this.handleBack}
          />
        ) : (
          ""
        )}
        {outro ? <Outro handleBack={this.handleBack} /> : ""}
      </>
    );
  }
}
