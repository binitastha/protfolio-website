import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'; // FontAwesome Sun and Moon icons

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply the theme based on local storage or default to light theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, []);

  // Toggle theme on click
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
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
