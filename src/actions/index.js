import * as ActionTypes from 'constants/actionTypes';

export const setNodeType = (node, nodeType) => ({
  type: ActionTypes.SET_NODE_TYPE,
  node,
  nodeType,
});

export const setGraphMode = (graphMode) => ({
  type: ActionTypes.SET_GRAPH_MODE,
  graphMode
});

export const clearGraph = () => ({
  type: ActionTypes.CLEAR_GRAPH,
});

export const resetGraph = () => ({
  type: ActionTypes.RESET_GRAPH,
});

export const startAlgorithm = () => ({
  type: ActionTypes.START_ALGORITHM,
});

export const endAlgorithm = () => ({
  type: ActionTypes.END_ALGORITHM,
});
