import React from 'react';

import './styles.css';
import { GraphModes } from 'types';

const ModeSwitcher = ({ mode, setMode }) =>  {
  return (
    <div className="mode-switcher">
      <p>Insert: {mode} </p>
      <button className="mode-button" onClick={() => setMode(GraphModes.START)}>START</button>
      <button className="mode-button" onClick={() => setMode(GraphModes.END)}>END</button>
      <button className="mode-button" onClick={() => setMode(GraphModes.WALL)}>WALL</button>
    </div>
  );
};

export default ModeSwitcher;
