// @flow
import React from 'react';
import type { Element } from 'react';

import { Route, Switch } from 'react-router-dom';

import LandingPage from './container/LandingPage';
import Lobby from './container/Lobby';

export const Router = (): Element<'div'> => {
  return (
    <div className="Router">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/lobby" component={Lobby} />
      </Switch>
    </div>
  );
};

export default Router;
