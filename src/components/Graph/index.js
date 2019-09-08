import React, { useReducer } from 'react';
import './style.css';

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
  }
}

const reducer = (state, action) => {
  const { matrix } = state.matrix;
  switch (action.type) {
    case "START":
      break;
    case "END":
      break;
    case "WALL":
      break;
    default:
      throw new Error("Unexpected action");
  }
  return {...state, matrix}
}

const Graph = (props) => {
  const height = 10;  // use window size
  const width = 10;
  const [state, dispatch] = useReducer(reducer, { height, width }, initState);

  const handleClick = (key) => {
    dispatch({type: props.selectMode, payload: key});
  }

  return (
    <table className="Graph" border="1">
      {state.matrix && state.matrix.length > 0 && state.matrix.map((rowArr, rowNum) => {
        return (
          <tr key={rowNum}>
            {rowArr && rowArr.length > 0 && rowArr.map((node, colNum) => {
              const key = `${rowNum} ${colNum}`;
              return (
                <td key={key} onClick={() => handleClick(key)}>
                  {node}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}

export default Graph;
