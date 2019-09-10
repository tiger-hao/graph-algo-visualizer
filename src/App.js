import React from 'react';

import logo from './logo.svg';
import './App.css';
import ModeSwitcher from 'components/ModeSwitcher';
import Graph from 'components/Graph';
import { GraphModes } from 'types';
import Node from 'components/Node'

const App = () => {
  var  array = Array(946).fill(null);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ModeSwitcher />
      <Graph selectMode={GraphModes.WALL} /> */}
      <div>{array.map((index) => <Node/>)}</div>
    </div>
  );
};

export default App;
