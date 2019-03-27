import React, { Component } from "react";
import { NavBar, SwitchRouter } from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SwitchRouter />
      </>
    );
  }
}
