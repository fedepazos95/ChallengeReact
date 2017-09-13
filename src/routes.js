// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';

// Containers
import Games from './containers/Games';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
    </Switch>
  </App>;

export default AppRoutes;
