import React, { Component } from 'react';
import { render } from 'react-dom';

import '../node_modules/normalize-css/normalize.css';
import './App.css';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}

render(<App />, document.getElementById('root'));
