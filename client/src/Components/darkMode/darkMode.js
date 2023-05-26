
import React, { useContext } from 'react';
import { DarkModeContext } from '../darkMode/darkModeContext';
import "../darkMode/dark-mode.css"
const ExampleComponent = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>Example Component</h1>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default ExampleComponent;