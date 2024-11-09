// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new ReactDOM API
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Update to createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);