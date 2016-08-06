import React, { Component } from 'react';
import '../assets/styles/Navbar.css';

class Navbar extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="navbar">
        <h1>{(currentUser && currentUser.name) || 'not login'}</h1>
      </div>
    )
  }
}

export default Navbar
