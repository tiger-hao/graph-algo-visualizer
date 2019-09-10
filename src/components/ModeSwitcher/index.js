import React from 'react';

import './styles.css';
import { GraphModes } from 'types';

const ModeSwitcher = ({ mode, setMode }) =>  {
  return (
    <div className="ModeSwitcher">
      <t>ModeSwitcher Mode: {mode}</t>
    </div>
  );
};

export default ModeSwitcher;
