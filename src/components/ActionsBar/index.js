import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { clearGraph, resetGraph } from 'actions';
import { GraphModes } from 'constants/index';
import dijkstra from 'algorithms/dijkstra';

const ActionsBar = ({ mode, setMode }) =>  {
  const dispatch = useDispatch();
  const { graph, start, end } = useSelector(state => ({
    graph: state.graph.matrix,
    start: state.graph.currStart,
    end: state.graph.currEnd,
  }));

  return (
    <div className="actions-bar">
      <div className="mode-container">
        <p>Insert:</p>
        <div className="mode-switcher">
          <div>
            <input type="radio" id="start-radio" name="graph-mode" onClick={() => setMode(GraphModes.START)} />
            <label for="start-radio">START</label>
          </div>
          <div>
            <input type="radio" id="end-radio" name="graph-mode" onClick={() => setMode(GraphModes.END)} />
            <label for="end-radio">END</label>
          </div>
          <div>
            <input type="radio" id="wall-radio" name="graph-mode" onClick={() => setMode(GraphModes.WALL)} defaultChecked/>
            <label for="wall-radio">WALL</label>
          </div>
        </div>
      </div>

      <div className="action-container">
        <button className="action-button" onClick={() => dijkstra(graph, start, end)}>Run Dijkstra's</button>
        <button className="action-button" onClick={() => dispatch(clearGraph())}>Clear Graph</button>
        <button className="action-button" onClick={() => dispatch(resetGraph())}>Reset Graph</button>
      </div>
    </div>
  );
};

export default ActionsBar;
