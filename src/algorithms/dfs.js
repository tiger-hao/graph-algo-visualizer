import store from 'store';
import { setNodeType, clearGraph, startAlgorithm, endAlgorithm } from 'actions';
import { NodeTypes } from 'constants/graph';
import { adjacent, sleep } from './helpers';

export async function dfs() {
  store.dispatch(clearGraph());
  store.dispatch(startAlgorithm());

  const {
    matrix: graph,
    startNode: start,
    endNode: end
  } = store.getState().graph;
  const rows = graph.length;
  const columns = graph[0].length;

  const previous = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => undefined)
  );
  const visited = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => false)
  );

  let reachedEnd = false;
  const stack = [start];

  while (stack.length && !reachedEnd) {
    if (!store.getState().algorithm.isRunning) {
      break;
    }

    const node = stack.pop();

    if (visited[node.row][node.col]) {
      continue;
    } else {
      visited[node.row][node.col] = true;
      store.dispatch(setNodeType(node, NodeTypes.TRAVERSED));
    }

    for (const adj of adjacent(node, graph)) {
      if (!visited[adj.row][adj.col]) {
        stack.push(adj);
        previous[adj.row][adj.col] = node;
      }

      if (adj.row === end.row && adj.col === end.col) {
        reachedEnd = true;
      }
    }

    await sleep(0);
  }

  let u = previous[end.row][end.col];
  if (u) {
    while (u.row !== start.row || u.col !== start.col) {
      store.dispatch(setNodeType(u, NodeTypes.PATH));
      u = previous[u.row][u.col];
    }
  }

  store.dispatch(endAlgorithm());
}
