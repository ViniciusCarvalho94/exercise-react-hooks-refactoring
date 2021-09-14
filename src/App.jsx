// src/App.js

import React from 'react';
import './style/App.css';
import Cars from './components/Cars';
import TrafficSignal from './components/TrafficSignal';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
