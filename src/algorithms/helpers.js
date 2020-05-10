import { NodeTypes } from 'constants/graph';

export function adjacent(node, graph) {
  const { row, col } = node;
  const adjacentNodes = new Set();

  if (col !== graph[0].length - 1 && graph[row][col + 1] !== NodeTypes.WALL) {
    adjacentNodes.add({ row, col: col + 1 });
  }

  if (col !== 0 && graph[row][col - 1] !== NodeTypes.WALL) {
    adjacentNodes.add({ row, col: col - 1 });
  }

  if (row !== graph.length - 1 && graph[row + 1][col] !== NodeTypes.WALL) {
    adjacentNodes.add({ row: row + 1, col });
  }

  if (row !== 0 && graph[row - 1][col] !== NodeTypes.WALL) {
    adjacentNodes.add({ row: row - 1, col });
  }

  return adjacentNodes;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
