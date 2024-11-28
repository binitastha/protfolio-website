import React from 'react';

function TabList({ activeTab, onTabClick }) {
  return (
    <div className="tab-list d-flex flex-lg-column justify-content-center align-items-end gap-4 gap-lg-2">
      <div
        className={`round-box tab ${activeTab === 'tab1' ? 'active' : ''}`}
        onClick={() => onTabClick('tab1')}
      >
        <i className="bi-house"></i>
      </div>
      <div
        className={`round-box tab ${activeTab === 'tab2' ? 'active' : ''}`}
        onClick={() => onTabClick('tab2')}
      >
        <i className="bi-person"></i>
      </div>
      <div
        className={`round-box tab ${activeTab === 'tab3' ? 'active' : ''}`}
        onClick={() => onTabClick('tab3')}
      >
        <i className="bi-person-workspace"></i>
      </div>
      <div
        className={`round-box tab ${activeTab === 'tab4' ? 'active' : ''}`}
        onClick={() => onTabClick('tab4')}
      >
        <i className="bi-chat"></i>
      </div>
    </div>
  );
}

export default TabList;
