import { GraphModes, NodeTypes } from 'constants/graph';
import { SET_NODE_TYPE, SET_GRAPH_MODE, CLEAR_GRAPH, RESET_GRAPH } from 'constants/actionTypes';
import { NODE_DIMENSION } from 'components/Node';

function getInitialState() {
  const rows = Math.floor((window.innerHeight - 75) / NODE_DIMENSION);
  const columns = Math.floor(window.innerWidth / NODE_DIMENSION);

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
    graphMode: GraphModes.WALL
  };
};

function reducer(state = getInitialState(), action) {
  let { matrix, currStart, currEnd } = state;
  let newMatrix;

  switch (action.type) {
    case SET_NODE_TYPE:
      const { node: { row, col }, nodeType } = action;

      // can't overwrite start and end nodes
      if (matrix[row][col] === NodeTypes.START || matrix[row][col] === NodeTypes.END) {
        return state;
      }

      newMatrix = matrix.map((rowArr, i) => {
        return rowArr.map((node, j) => {
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
        });
      });

      return {
        ...state,
        matrix: newMatrix,
        currStart,
        currEnd
      };
    case SET_GRAPH_MODE:
      return {
        ...state,
        graphMode: action.graphMode
      };
    case CLEAR_GRAPH:
      newMatrix = matrix.map(rowArr => {
        return rowArr.map(node => {
          if (node === NodeTypes.TRAVERSED || node === NodeTypes.PATH) {
            return NodeTypes.DEFAULT;
          }

          return node;
        });
      });

      return {
        ...state,
        matrix: newMatrix
      };
    case RESET_GRAPH:
      newMatrix = matrix.map(rowArr => {
        return rowArr.map(node => {
          if (node !== NodeTypes.START && node !== NodeTypes.END) {
            return NodeTypes.DEFAULT;
          }

          return node;
        });
      });

      return {
        ...state,
        matrix: newMatrix
      };
    default:
      return state;
  }
};

export default reducer;
