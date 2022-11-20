import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StatesProvider } from './contexts/StatesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatesProvider>
      <App />
    </StatesProvider>
  </React.StrictMode>
);