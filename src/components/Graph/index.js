import React, { useReducer } from 'react';

import './styles.css';
import { GraphModes } from 'types';
import Node from 'components/Node';

const initState = ({ height, width }) => {
  const matrix = new Array(height);
  const currStart = undefined;
  const currEnd = undefined;

  for(let i = 0; i < height; i++) {
    matrix[i] = new Array(width);

    for (let j = 0; j < width; j++) {
      matrix[i][j] = GraphModes.DEFAULT;
    }
  }

  return {
    matrix,
    currStart,
    currEnd,
  };
};

const reducer = (state, action) => {
  let { matrix, currStart, currEnd } = state;
  const { row, col } = action.payload;
  matrix[row][col] = action.type;

  if (action.type === GraphModes.START) {
    if (currStart) {
      matrix[currStart.row][currStart.col] = GraphModes.DEFAULT;
    }
    currStart = { row, col };
  } else if (action.type === GraphModes.END) {
    if (currEnd) {
      matrix[currEnd.row][currEnd.col] = GraphModes.DEFAULT;
    }
    currEnd = { row, col };
  }

  return {
    matrix,
    currStart,
    currEnd,
  };
};

const Graph = ({ graphMode }) => {
  const height = Math.floor((window.innerHeight - 75)/ 34);
  const width = Math.floor(window.innerWidth / 34);
  const [state, dispatch] = useReducer(reducer, { height, width }, initState);

  const handleClick = ({ row, col }) => {
    dispatch({type: graphMode, payload: { row, col }});
  };

  return (
    <div className="graph">
      {state.matrix && state.matrix.length > 0 && state.matrix.map((rowArr, rowNum) => {
        return (
          <div>
            {rowArr && rowArr.length > 0 && rowArr.map((value, colNum) => {
              return (
                <Node row={rowNum} col={colNum} className={value}  onClick={handleClick} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
