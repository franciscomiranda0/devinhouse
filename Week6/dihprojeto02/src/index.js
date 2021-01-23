import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './styles/theme.css';

import { buildServer } from './services/mirage';
import { initDatabase } from './utils/db';

if (process.env.NODE_ENV !== 'production') {
  initDatabase();
  buildServer({ environment: process.env.NODE_ENV })
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);