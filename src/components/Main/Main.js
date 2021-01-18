import React, { Component } from 'react';
import './Main.less';
import TabBar from '../TabBar/TabBar';
import Forecast from '../Forecast/Forecast';

class Main extends Component {
  state = {
    activeTab: 0
  }

  setActiveTab = tabId => {
    this.setState({
      activeTab: tabId 
    });
  }

  render() {
    return (
      <div className="main-container">
        <TabBar
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab}
        />
        <Forecast activeTab={this.state.activeTab} />
      </div>
    )
  }
}

export default Main;