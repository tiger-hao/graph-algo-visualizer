import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { clearGraph, resetGraph, endAlgorithm } from 'actions';
import { GraphModes } from 'constants/graph';
import dijkstra from 'algorithms/dijkstra';

const ActionsBar = ({ mode, setMode }) =>  {
  const dispatch = useDispatch();
  const { graph, start, end, algoRunning } = useSelector(state => ({
    graph: state.graph.matrix,
    start: state.graph.currStart,
    end: state.graph.currEnd,
    algoRunning: state.algorithm.isRunning,
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
        <button className="run button" onClick={() => dijkstra(graph, start, end)} disabled={algoRunning}>Run Dijkstra's</button>
        <button className="stop button" onClick={() => dispatch(endAlgorithm())} disabled={!algoRunning}>Stop</button>
        <button className="action button" onClick={() => dispatch(clearGraph())} disabled={algoRunning}>Clear Graph</button>
        <button className="action button" onClick={() => dispatch(resetGraph())} disabled={algoRunning}>Reset Graph</button>
      </div>
    </div>
  );
};

export default ActionsBar;
