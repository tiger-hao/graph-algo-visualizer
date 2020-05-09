import * as ActionTypes from 'constants/actionTypes';

export const changeNodeType = (node, nodeType) => ({
  type: ActionTypes.CHANGE_NODE_TYPE,
  node,
  nodeType,
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
