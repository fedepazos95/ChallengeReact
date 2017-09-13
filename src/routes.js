// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Container
import App from './containers/App';
import Home from './containers/Home';
import Games from './containers/Games';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
    </Switch>
  </App>;

export default AppRoutes;
