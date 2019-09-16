export const CHANGE_NODE_TYPE = "CHANGE_NODE_TYPE";
export const CLEAR_GRAPH = "CLEAR_GRAPH";

export const changeNodeType = (node, nodeType) => ({
  type: CHANGE_NODE_TYPE,
  node,
  nodeType,
});

export const clearGraph = () => ({
  type: CLEAR_GRAPH,
});
