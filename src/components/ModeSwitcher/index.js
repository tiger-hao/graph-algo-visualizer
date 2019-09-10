import React from 'react';

import './styles.css';
import { GraphModes } from 'types';

const ModeSwitcher = ({ mode, setMode }) =>  {
  return (
    <div className="ModeSwitcher">
      <t>ModeSwitcher Mode: {mode}</t>
      <t onClick={() => setMode(GraphModes.START)}> START</t>
      <t onClick={() => setMode(GraphModes.END)}> END</t>
      <t onClick={() => setMode(GraphModes.WALL)}> WALL</t>
    </div>
  );
};

export default ModeSwitcher;
