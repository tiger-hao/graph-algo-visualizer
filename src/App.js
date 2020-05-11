import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionsBar from 'components/ActionsBar';
import Graph from 'components/Graph';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Graph Algorithm Visualizer</b>
      </header>
      <ActionsBar />
      <Graph />
    </div>
  );
};

export default App;
