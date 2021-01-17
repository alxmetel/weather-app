import React, { Component } from 'react';
import './Main.less';
import TabBar from '../TabBar/TabBar';
import TabContent from '../TabContent/TabContent';

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
      <div className="widget-container">
        <TabBar
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab}
        />
        <TabContent activeTab={this.state.activeTab} />
      </div>
    )
  }
}

export default Main;