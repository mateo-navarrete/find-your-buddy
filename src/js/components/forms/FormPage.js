import React, { Component } from 'react';
import {
  StyledStepper
  // AdoptInfo,
  // Household,
  // AgeForm,
  // Outro,
  // Personal,
  // PetStatus
} from '.';

export default class FormPage extends Component {
  state = {
    intro: true,
    personal: false,
    household: false,
    petStatus: false,
    adoptInfo: false,
    outro: false,
  };
  handleNext = e => {
    const { name } = e.target;
    const nextSection = {
      // outro: "intro",
      intro: 'personal',
      personal: 'household',
      household: 'petStatus',
      petStatus: 'adoptInfo',
      adoptInfo: 'outro',
    };
    this.setState({ [name]: false, [nextSection[name]]: true });
  };

  handleBack = e => {
    const { name } = e.target;
    const backSection = {
      // intro: "outro",
      personal: 'intro',
      household: 'personal',
      petStatus: 'household',
      adoptInfo: 'petStatus',
      outro: 'adoptInfo',
    };
    this.setState({ [name]: false, [backSection[name]]: true });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      message: '',
    });
  };

  render() {
    const {
      // intro,
      // personal,
      // household,
      // petStatus,
      // adoptInfo,
      // outro
      // is18Label,
      // is18Options,
      // message
    } = this.state;
    // console.log(this.state);
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
      >
        <StyledStepper />
      </div>
    );
  }
}

// {intro ? <AgeForm handleNext={this.handleNext} /> : ""}
// {personal ? (
//   <Personal handleNext={this.handleNext} handleBack={this.handleBack} />
// ) : (
//   ""
// )}
// {household ? (
//   <Household
//     handleNext={this.handleNext}
//     handleBack={this.handleBack}
//   />
// ) : (
//   ""
// )}
// {petStatus ? (
//   <PetStatus
//     handleNext={this.handleNext}
//     handleBack={this.handleBack}
//   />
// ) : (
//   ""
// )}
// {adoptInfo ? (
//   <AdoptInfo
//     handleNext={this.handleNext}
//     handleBack={this.handleBack}
//   />
// ) : (
//   ""
// )}
// {outro ? <Outro handleBack={this.handleBack} /> : ""}
