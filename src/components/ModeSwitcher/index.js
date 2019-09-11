import React from 'react';

import './styles.css';
import { GraphModes } from 'types';

const ModeSwitcher = ({ mode, setMode }) =>  {
  return (
    <div className="ModeSwitcher">
      <t>ModeSwitcher Mode: {mode} </t>
      <button onClick={() => setMode(GraphModes.START)}>START</button>
      <button onClick={() => setMode(GraphModes.END)}>END</button>
      <button onClick={() => setMode(GraphModes.WALL)}>WALL</button>
    </div>
  );
};

export default ModeSwitcher;
