import React from 'react';
import './TabBar.less';
import appData from '../../appData.json';
import TabItem from '../TabItem/TabItem';

const TabBar = props => {
  const { activeTab, setActiveTab } = props;

  const renderTabItems = () => {
    return appData.cities.map((elem, i) => {
      return (
        <TabItem
          key={i}
          id={elem.id}
          displayName={elem.display_name}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )
    })
  }

  return (
    <div className="tab-bar-container">
      {renderTabItems()}
    </div>  
  )
}

export default TabBar;