import { GraphModes, NodeTypes } from 'constants/graph';
import * as ActionTypes from 'constants/actionTypes';
import { NODE_DIMENSION } from 'components/Node';

function getInitialState() {
  const rows = Math.floor((window.innerHeight - 125) / NODE_DIMENSION);
  const columns = Math.floor(window.innerWidth / NODE_DIMENSION);

  const matrix = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => NodeTypes.DEFAULT)
  );
  const weights = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => 1)
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
    weights,
    currStart,
    currEnd,
    graphMode: GraphModes.WALL
  };
};

function reducer(state = getInitialState(), action) {
  let { matrix, weights, currStart, currEnd } = state;

  switch (action.type) {
    case ActionTypes.SET_NODE_TYPE: {
      const { node: { row, col }, nodeType } = action;

      // ensure start and end nodes are not overwritten
      if (matrix[row][col] === NodeTypes.START || matrix[row][col] === NodeTypes.END) {
        return state;
      }

      const newMatrix = matrix.map((rowArr, i) =>
        rowArr.map((node, j) => {
          if (i === row && j === col) {
            return nodeType;
          }

          // ensure only one start and end node exist
          if (nodeType === NodeTypes.START && node === NodeTypes.START) {
            currStart = { row, col };
            return NodeTypes.DEFAULT;
          } else if (nodeType === NodeTypes.END && node === NodeTypes.END) {
            currEnd = { row, col };
            return NodeTypes.DEFAULT;
          }

          return node;
        })
      );

      return {
        ...state,
        matrix: newMatrix,
        currStart,
        currEnd
      };
    }
    case ActionTypes.SET_NODE_WEIGHT: {
      const { node: { row, col }, weight } = action;

      const newWeights = weights.map((rowArr, i) =>
        rowArr.map((node, j) => {
          if (i === row && j === col) {
            return weight;
          }

          return node;
        })
      );

      return {
        ...state,
        weights: newWeights
      };
    }
    case ActionTypes.SET_GRAPH_MODE:
      return {
        ...state,
        graphMode: action.graphMode
      };
    case ActionTypes.CLEAR_GRAPH: {
      const newMatrix = matrix.map(rowArr =>
        rowArr.map(node => {
          if (node === NodeTypes.TRAVERSED || node === NodeTypes.PATH) {
            return NodeTypes.DEFAULT;
          }

          return node;
        })
      );

      return {
        ...state,
        matrix: newMatrix
      };
    }
    case ActionTypes.RESET_GRAPH: {
      const newMatrix = matrix.map(rowArr =>
        rowArr.map(node => {
          if (node !== NodeTypes.START && node !== NodeTypes.END) {
            return NodeTypes.DEFAULT;
          }

          return node;
        })
      );

      return {
        ...state,
        matrix: newMatrix
      };
    }
    default:
      return state;
  }
};

export default reducer;
