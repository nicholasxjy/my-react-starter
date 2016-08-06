import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/userActions.js';
import { fetchFeeds } from '../actions/feedActions.js';

import Navbar from '../components/Navbar.js';

function mapStateToProps(state) {
  return {
    currentUser: state.userState.currentUser,
    feeds: state.feedState.feeds
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser,
    fetchFeeds,
    dispatch
  }
}

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCurrentUser());
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Navbar currentUser={currentUser} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
