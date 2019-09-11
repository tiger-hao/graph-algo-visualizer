import React, { useReducer } from 'react';

import './styles.css';
import { GraphModes } from 'types';
import Node from 'components/Node';

const initState = ({ height, width }) => {
  const matrix = new Array(height);

  for(let i = 0; i < height; i++) {
    matrix[i] = new Array(width);

    for (let j = 0; j < width; j++) {
      matrix[i][j] = GraphModes.DEFAULT;
    }
  }

  return {
    dimentions: { height, width },
    matrix,
  };
};

const reducer = (state, action) => {
  const matrix = state.matrix;
  const { row, col } = action.payload;

  matrix[row][col] = action.type;
  return {...state, matrix};
};

const Graph = ({ graphMode }) => {
  const height = Math.floor(window.innerHeight / 45);
  const width = Math.floor(window.innerWidth / 35);
  const [state, dispatch] = useReducer(reducer, { height, width }, initState);

  const handleClick = ({ row, col }) => {
    dispatch({type: graphMode, payload: { row, col }});
  };

  return (
    <div className="graph">
      {state.matrix && state.matrix.length > 0 && state.matrix.map((rowArr, rowNum) => {
        return (
          <div>
            <div key={rowNum}>
              {rowArr && rowArr.length > 0 && rowArr.map((value, colNum) => {
                return (
                  <Node row={rowNum} col={colNum} className={value}  onClick={handleClick} />
                );
              })}
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
