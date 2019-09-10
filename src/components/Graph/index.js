import React, { useReducer } from 'react';

import './styles.css';
import { GraphModes } from 'types';
import Node from 'components/Node';

const initState = ({ height, width }) => {
  const matrix = new Array(height);

  for(let i = 0; i < height; i++) {
    matrix[i] = new Array(width);

    for (let j = 0; j < width; j++) {
      matrix[i][j] = 0;
    }
  }

  return {
    dimentions: { height, width },
    matrix,
  };
};

const reducer = (state, action) => {
  const { matrix } = state.matrix;
  switch (action.type) {
    case GraphModes.START:
      break;
    case GraphModes.END:
      break;
    case GraphModes.WALL:
      break;
    default:
      throw new Error("Unexpected action");
  }
  return {...state, matrix};
};

const Graph = ({ graphMode }) => {
  const height = 10;  // use window size
  const width = 10;
  const [state, dispatch] = useReducer(reducer, { height, width }, initState);

  const handleClick = (key) => {
    dispatch({type: graphMode, payload: key});
  };

  return (
    <table className="graph" border="1">
      {state.matrix && state.matrix.length > 0 && state.matrix.map((rowArr, rowNum) => {
        return (
          <div key={rowNum} className="row">
            {rowArr && rowArr.length > 0 && rowArr.map((node, colNum) => {
              const key = `${rowNum} ${colNum}`;
              return (
                <Node key={key} onClick={handleClick}>
                  {node}
                </Node>
              );
            })}
          </div>
        );
      })}
    </table>
  );
};

export default Graph;
