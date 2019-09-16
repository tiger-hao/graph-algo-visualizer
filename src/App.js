import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import ActionsBar from 'components/ActionsBar';
import Graph from 'components/Graph';
import { GraphModes } from 'constants/graph';

const App = () => {
  const [graphMode, setGraphMode] = useState(GraphModes.WALL);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Graph Algorithms Visualizer</b>
      </header>
      <ActionsBar mode={graphMode} setMode={setGraphMode}/>
      <Graph graphMode={graphMode} />
    </div>
  );
};

export default App;
