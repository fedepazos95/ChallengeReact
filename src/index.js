// Dependencies
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Routes
import AppRoutes from './routes';

// Assets
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
// SVGs
import react from './images/react.svg';
import redux from './images/redux.svg';
import materialize from './images/materialize.svg';

// Redux store
import configureStore from './lib/configureStore';

// Reducers
import rootReducer from './reducers';

// Configuring redux store
const store = configureStore(
  {
    initialState: window.initialState
  },
  rootReducer
);

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
