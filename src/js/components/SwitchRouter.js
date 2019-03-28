import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { AnimalPage, CatsPage, DogsPage, FormPage, HomePage } from ".";

export const SwitchRouter = () => {
  return (
    <Switch>
      <Route exact path="/cats" component={withRouter(CatsPage)} />
      <Route exact path="/dogs" component={withRouter(DogsPage)} />
      <Route path="/animals/:id" component={withRouter(AnimalPage)} />
      <Route path="/form" component={withRouter(FormPage)} />
      <Route path="/" render={withRouter(HomePage)} />
    </Switch>
  );
};
