import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true); 
  useEffect(() => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }, []);

  // Toggle theme on click
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
  };

  return (
    <div className="round-box theme-switch" onClick={toggleTheme}>
      {isDarkMode ? (
        <FaMoon className="dark-text" />
      ) : (
        <FaSun className="light-text" />
      )}
    </div>
  );
}

export default ThemeSwitch;
