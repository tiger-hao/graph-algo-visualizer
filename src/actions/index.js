export const CHANGE_NODE_TYPE = "CHANGE_NODE_TYPE";

export const changeNodeType = (node, nodeType) => ({
  type: CHANGE_NODE_TYPE,
  node,
  nodeType,
});
