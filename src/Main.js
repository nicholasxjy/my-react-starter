import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }
  incrementHandler() {
    this.setState({
      count: this.state.count+1
    });
  }
  decrementHandler() {
    this.setState({
      count: this.state.count -1
    })
  }
  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.incrementHandler}>+1</button>
        <button onClick={this.decrementHandler}>-1</button>
      </div>
    )
  }
}
