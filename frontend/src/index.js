import React from 'react';
import ReactDOM from 'react-dom/client'; // use 'react-dom/client' for React 18+
import './index.css';
import App from './App';

// Create a root for the app and render it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
