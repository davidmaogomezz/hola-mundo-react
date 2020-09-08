import React from 'react';
import Stateful from './components/Stateful.js'
import Stateless from './components/Stateless.js'
import Presentacional from './components/Presentacional.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Stateful/>
      <Stateless/>      
      <Presentacional/>      
    </div>
  );
}

export default App;
