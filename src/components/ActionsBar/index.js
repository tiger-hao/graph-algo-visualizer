import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { setGraphMode, clearGraph, resetGraph, endAlgorithm } from 'actions';
import { GraphModes } from 'constants/graph';
import dijkstra from 'algorithms/dijkstra';

const ActionsBar = () => {
  const dispatch = useDispatch();
  const algoRunning = useSelector(state => state.algorithm.isRunning);

  return (
    <div className="actions-bar">
      <div className="mode-container">
        <p>Insert:</p>
        <div className="mode-switcher">
          <div>
            <input type="radio" id="start-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.START))} />
            <label htmlFor="start-radio">START</label>
          </div>
          <div>
            <input type="radio" id="end-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.END))} />
            <label htmlFor="end-radio">END</label>
          </div>
          <div>
            <input type="radio" id="wall-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.WALL))} defaultChecked />
            <label htmlFor="wall-radio">WALL</label>
          </div>
          <div>
            <input type="radio" id="weight-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.WEIGHT))} />
            <label htmlFor="weight-radio">WEIGHT</label>
          </div>
        </div>
      </div>

      <div className="action-container">
        <button className="run button" onClick={dijkstra} disabled={algoRunning}>Run Algorithm</button>
        <button className="stop button" onClick={() => dispatch(endAlgorithm())} disabled={!algoRunning}>Stop</button>
        <button className="action button" onClick={() => dispatch(clearGraph())} disabled={algoRunning}>Clear Graph</button>
        <button className="action button" onClick={() => dispatch(resetGraph())} disabled={algoRunning}>Reset Graph</button>
      </div>
    </div>
  );
};

export default ActionsBar;
