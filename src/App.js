import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TabList from './components/Tablist';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <Router>
      <main>
        <div className="position-relative">
          <ThemeSwitch />
          <TabList />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
