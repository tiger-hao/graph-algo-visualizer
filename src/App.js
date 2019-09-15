import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import ModeSwitcher from 'components/ModeSwitcher';
import Graph from 'components/Graph';
import { GraphModes } from 'constants/index';

const App = () => {
  const [graphMode, setGraphMode] = useState(GraphModes.WALL);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Graph Algorithms Visualizer</b>
      </header>
      <ModeSwitcher mode={graphMode} setMode={setGraphMode}/>
      <Graph graphMode={graphMode} />
    </div>
  );
};

export default App;
