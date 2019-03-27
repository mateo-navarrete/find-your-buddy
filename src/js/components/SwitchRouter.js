import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { AnimalPage, FormPage, HomePage } from '.';

export const SwitchRouter = () => {
  return (
    <Switch>
      <Route exact path="/animal" component={withRouter(AnimalPage)} />
      <Route path="/form" component={withRouter(FormPage)} />
      <Route path="/" render={withRouter(HomePage)} />
    </Switch>
  );
};
