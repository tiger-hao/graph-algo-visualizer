import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';
import { GraphModes } from 'constants/index';
import RunButton from 'components/RunButton';

const ModeSwitcher = ({ mode, setMode }) =>  {
  const { graph, start, end } = useSelector(state => ({
    graph: state.graph.matrix,
    start: state.graph.currStart,
    end: state.graph.currEnd,
  }));

  return (
    <div className="mode-switcher">
      <p>Insert: {mode} </p>
      <button className="mode-button" onClick={() => setMode(GraphModes.START)}>START</button>
      <button className="mode-button" onClick={() => setMode(GraphModes.END)}>END</button>
      <button className="mode-button" onClick={() => setMode(GraphModes.WALL)}>WALL</button>

      <RunButton
        graph={graph}
        start={start}
        end={end}
      />
    </div>
  );
};

export default ModeSwitcher;
