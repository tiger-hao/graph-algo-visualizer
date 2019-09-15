import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';
import { GraphModes } from 'constants/index';
import dijkstra from 'algorithms/dijkstra';

const ModeSwitcher = ({ mode, setMode }) =>  {
  const { graph, start, end } = useSelector(state => ({
    graph: state.graph.matrix,
    start: state.graph.currStart,
    end: state.graph.currEnd,
  }));

  return (
    <div className="actions-bar">
      <div className="mode-switcher">
        <p>Insert: {mode} </p>
        <button className="mode-button" onClick={() => setMode(GraphModes.START)}>START</button>
        <button className="mode-button" onClick={() => setMode(GraphModes.END)}>END</button>
        <button className="mode-button" onClick={() => setMode(GraphModes.WALL)}>WALL</button>
      </div>

      <button className="run-button" onClick={() => dijkstra(graph, start, end)}>RUN DIJKSTRA'S</button>
    </div>
  );
};

export default ModeSwitcher;
