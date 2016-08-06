import React, { Component } from 'react';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(this.props.fetchFeeds())
  }
  render() {
    const { feeds } = this.props;
    let mapFeeds = feeds.map(feed => {
      return (<li key={feed.id}>{feed.title}</li>)
    });
    return (
      <ul>
        {mapFeeds}
      </ul>
    )
  }
}
