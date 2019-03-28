import React, { Component } from "react";
import { StyledNavBar, NavBar, SwitchRouter } from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <StyledNavBar />
        <NavBar />
        <SwitchRouter />
      </>
    );
  }
}
