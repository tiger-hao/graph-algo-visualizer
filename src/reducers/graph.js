import { NodeTypes } from 'constants/graph';
import { CHANGE_NODE_TYPE, CLEAR_GRAPH, RESET_GRAPH } from 'constants/action-types';

function initialState() {
  const rows = Math.floor((window.innerHeight - 75) / 34);
  const columns = Math.floor(window.innerWidth / 34);

  const matrix = [...Array(rows)].map(x =>
    [...Array(columns)].map(x =>
      NodeTypes.DEFAULT
    )
  );
  const currStart = {
    row: Math.floor(rows / 2),
    col: Math.floor(columns / 3) - 1,
  };
  const currEnd = {
    row: Math.floor(rows / 2),
    col: Math.floor(columns * 2 / 3),
  };

  matrix[currStart.row][currStart.col] = NodeTypes.START;
  matrix[currEnd.row][currEnd.col] = NodeTypes.END;

  return {
    matrix,
    currStart,
    currEnd,
  };
};

function reducer(state = initialState(), action) {
  let { matrix, currStart, currEnd } = state;

  switch (action.type) {
    case CHANGE_NODE_TYPE:
      const { node: { row, col }, nodeType } = action;

      // can't overwrite start and end nodes
      if (matrix[row][col] !== NodeTypes.START && matrix[row][col] !== NodeTypes.END) {
        // ensure only one start and end node exist
        if (nodeType === NodeTypes.START) {
          if (currStart) {
            matrix[currStart.row][currStart.col] = NodeTypes.DEFAULT;
          }
          currStart = { row, col };
        } else if (nodeType === NodeTypes.END) {
          if (currEnd) {
            matrix[currEnd.row][currEnd.col] = NodeTypes.DEFAULT;
          }
          currEnd = { row, col };
        }

        matrix[row][col] = nodeType;
      }

      return {
        matrix,
        currStart,
        currEnd,
      };
    case CLEAR_GRAPH:
      matrix.forEach((rowArr, row, arr) => {
        rowArr.forEach((node, col) => {
          if (matrix[row][col] === NodeTypes.TRAVERSED || matrix[row][col] === NodeTypes.PATH) {
            matrix[row][col] = NodeTypes.DEFAULT;
          }
        });
      });

      return {
        ...state,
        matrix
      };
    case RESET_GRAPH:
      matrix.forEach((rowArr, row, arr) => {
        rowArr.forEach((node, col) => {
          if (matrix[row][col] !== NodeTypes.START && matrix[row][col] !== NodeTypes.END) {
            matrix[row][col] = NodeTypes.DEFAULT;
          }
        });
      });

      return {
        ...state,
        matrix
      };
    default:
      return state;
  }
};

export default reducer;
