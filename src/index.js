import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hire from './components/hire/hire';
import Info from './components/info/info';
import Experience2 from './components/Experience2/Experience2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Hire />
      <Info />
    </div>
    <Experience2/>
  </React.StrictMode>
);
