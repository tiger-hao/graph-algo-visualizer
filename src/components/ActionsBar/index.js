import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { setGraphMode, clearGraph, resetGraph, endAlgorithm } from 'actions';
import { GraphModes } from 'constants/graph';
import { bfs, dfs, dijkstra } from 'algorithms';

const ActionsBar = () => {
  const dispatch = useDispatch();
  const algoRunning = useSelector(state => state.algorithm.isRunning);

  return (
    <div className="actions-bar">
      <div className="button-container">
        <h1 className="button-group-header">Insert:</h1>

        <div className="button-group">
          <div className="mode-button">
            <input className="mode-radio" type="radio" id="start-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.START))} />
            <label className="mode-label" htmlFor="start-radio">START</label>
          </div>
          <div className="mode-button">
            <input className="mode-radio" type="radio" id="end-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.END))} />
            <label className="mode-label" htmlFor="end-radio">END</label>
          </div>
          <div className="mode-button">
            <input className="mode-radio" type="radio" id="wall-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.WALL))} defaultChecked />
            <label className="mode-label" htmlFor="wall-radio">WALL</label>
          </div>
          <div className="mode-button">
            <input className="mode-radio" type="radio" id="weight-radio" name="graph-mode" onClick={() => dispatch(setGraphMode(GraphModes.WEIGHT))} />
            <label className="mode-label" htmlFor="weight-radio">WEIGHT</label>
          </div>
        </div>
      </div>

      <div className="button-container">
        <h1 className="button-group-header">Run:</h1>

        <div className="button-group">
          <div className="button-group">
            <button className="run button" onClick={bfs} disabled={algoRunning}>BFS</button>
            <button className="run button" onClick={dfs} disabled={algoRunning}>DFS</button>
            <button className="run button" onClick={dijkstra} disabled={algoRunning}>Dijkstra's</button>
          </div>

          <div className="button-group">
            <button className="stop button" onClick={() => dispatch(endAlgorithm())} disabled={!algoRunning}>Stop</button>
            <button className="action button" onClick={() => dispatch(clearGraph())} disabled={algoRunning}>Clear Graph</button>
            <button className="action button" onClick={() => dispatch(resetGraph())} disabled={algoRunning}>Reset Graph</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
