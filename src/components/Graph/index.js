import React, { useReducer } from 'react';

import './styles.css';
import { GraphModes } from 'types';
import Node from 'components/Node';

const initState = ({ height, width }) => {
  const matrix = new Array(height);
  const currStart = {
    row: Math.floor(height / 2) - 1,
    col: Math.floor(width / 4) - 1,
  };
  const currEnd = {
    row: Math.floor(height / 2) - 1,
    col: Math.floor(width * 3 / 4) - 1,
  };

  for(let i = 0; i < height; i++) {
    matrix[i] = new Array(width);

    for (let j = 0; j < width; j++) {
      if (i === currStart.row && j === currStart.col) {
        matrix[i][j] = GraphModes.START;
      } else if (i === currEnd.row && j === currEnd.col) {
        matrix[i][j] = GraphModes.END;
      } else {
        matrix[i][j] = GraphModes.DEFAULT;
      }
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

  if (matrix[row][col] !== GraphModes.START && matrix[row][col] !== GraphModes.END) {
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

    if (action.type === GraphModes.WALL) {
      matrix[row][col] = matrix[row][col] === GraphModes.WALL ? GraphModes.DEFAULT : GraphModes.WALL;
    } else {
      matrix[row][col] = action.type;
    }
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
