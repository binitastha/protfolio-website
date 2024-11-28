import React from 'react';
import ProfileSection from './ProfileSection';

function TabContent({ activeTab }) {
  return (
    <div className="tab-content">
      <div id="tab1" className={`content p-2 position-relative ${activeTab === 'tab1' ? 'active' : ''}`}>
        <ProfileSection />
      </div>
      <div id="tab2" className={`content p-2 ${activeTab === 'tab2' ? 'active' : ''}`}>
        dd
      </div>

    </div>
  );
}

export default TabContent;
