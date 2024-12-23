import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: import from 'react-dom/client' in React 18
import App from './App';  // Correct path to App.js inside 'src' folder
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/stylesheets/style.css'; 





// Create a root using React 18's `createRoot` method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(<App />);
