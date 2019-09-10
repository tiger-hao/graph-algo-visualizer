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
  const height = Math.floor(window.innerHeight / 35);
  const width = Math.floor(window.innerWidth / 35);
  const [state, dispatch] = useReducer(reducer, { height, width }, initState);

  const handleClick = (key) => {
    dispatch({type: graphMode, payload: key});
  };

  return (
    <div className="graph">
      {state.matrix && state.matrix.length > 0 && state.matrix.map((rowArr, rowNum) => {
        return (
          <div key={rowNum} className="row">
            {rowArr && rowArr.length > 0 && rowArr.map((node, colNum) => {
              const key = `${rowNum} ${colNum}`;
              return (
                <Node key={key} onClick={handleClick} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
