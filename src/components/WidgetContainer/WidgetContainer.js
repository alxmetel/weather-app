import React, { Component } from 'react';
import TabBarContainer from '../tabBar/TabBarContainer/TabBarContainer';
import TabContentContainer from '../tabContent/TabContentContainer/TabContentContainer';

class WidgetContainer extends Component {
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
      <div className="tab-content-container">
        <TabBarContainer
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab}
        />
        <TabContentContainer activeTab={this.state.activeTab} />
      </div>
    )
  }
}

export default WidgetContainer;