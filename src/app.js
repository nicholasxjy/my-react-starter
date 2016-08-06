import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import config from './config';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './containers/App.js';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Navbar from './components/Navbar.js';

import store from './store.js';

const root = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
)


render(root, document.getElementById('react-app'));
