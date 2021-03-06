import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

class Slack extends Component {
  render() {
    return (
      <div id="slack">
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default Slack;
