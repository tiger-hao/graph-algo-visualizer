import React, { useReducer } from 'react';

import './styles.css';
import { GraphModes, NodeTypes } from 'types';
import Node from 'components/Node';
import RunButton from 'components/RunButton';

const initState = ({ height, width }) => {
  const matrix = new Array(height);
  const currStart = {
    row: Math.floor(height / 2) - 1,
    col: Math.floor(width / 4) - 1,
  };
  const currEnd = {
    row: Math.floor(height / 2) - 1,
    col: Math.floor(width * 3 / 4),
  };

  for(let i = 0; i < height; i++) {
    matrix[i] = new Array(width);

    for (let j = 0; j < width; j++) {
      if (i === currStart.row && j === currStart.col) {
        matrix[i][j] = NodeTypes.START;
      } else if (i === currEnd.row && j === currEnd.col) {
        matrix[i][j] = NodeTypes.END;
      } else {
        matrix[i][j] = NodeTypes.DEFAULT;
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

  if (action.type === "run") {
    const { node, nodeType } = action.payload;

    if (matrix[node.row][node.col] === NodeTypes.DEFAULT || nodeType === NodeTypes.PATH ) {
      matrix[node.row][node.col] = nodeType;
    }
  } else {
    const { row, col } = action.payload;

    if (matrix[row][col] !== NodeTypes.START && matrix[row][col] !== NodeTypes.END) {
      // ensure only one start and end exist
      if (action.type === GraphModes.START) {
        if (currStart) {
          matrix[currStart.row][currStart.col] = NodeTypes.DEFAULT;
        }
        currStart = { row, col };
      } else if (action.type === GraphModes.END) {
        if (currEnd) {
          matrix[currEnd.row][currEnd.col] = NodeTypes.DEFAULT;
        }
        currEnd = { row, col };
      }

      // wall toggling
      if (action.type === GraphModes.WALL) {
        matrix[row][col] = matrix[row][col] === NodeTypes.WALL ? NodeTypes.DEFAULT : NodeTypes.WALL;
      } else {
        matrix[row][col] = action.type;
      }
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
      <RunButton
        graph={state.matrix}
        start={state.currStart}
        end={state.currEnd}
        onClick={dispatch}
      />
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
