
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || !savedTheme;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
    localStorage.setItem('theme', theme);

    updateChartTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="button-secondary theme-switch" onClick={toggleTheme}>
      {isDarkMode ? (
        <FaMoon className="dark-text" />
      ) : (
        <FaSun className="light-text" />
      )}
    </div>
  );
}

function updateChartTheme(isDark) {
  // update your chart library theme or other elements here
}

export default ThemeSwitch;
