import React, { useState } from 'react';
import TabList from './Tablist'; // Import TabList component
import TabContent from './TabContent'; // Import TabContent component
import ThemeSwitch from './ThemeSwitch'; // Import ThemeSwitch component

function App() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <div className="position-relative">
        <ThemeSwitch />
        <TabList activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="main-section">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </main>
  );
}

export default App;
