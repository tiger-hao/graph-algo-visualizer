import store from 'store';
import { setNodeType, clearGraph, startAlgorithm, endAlgorithm } from 'actions';
import { NodeTypes } from 'constants/graph';
import { adjacent, sleep } from './helpers';
import { PriorityQueue } from './PriorityQueue';

export async function dijkstra() {
  store.dispatch(clearGraph());
  store.dispatch(startAlgorithm());

  const {
    matrix: graph,
    weights,
    startNode: start,
    endNode: end
  } = store.getState().graph;
  const rows = graph.length;
  const columns = graph[0].length;
  const pq = new PriorityQueue((a, b) => a < b);
  pq.push(start, 0);

  const distances = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => Infinity)
  );
  const previous = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => undefined)
  );
  const visited = [...Array(rows)].map(() =>
    [...Array(columns)].map(() => false)
  );

  let reachedEnd = false;

  while (!reachedEnd) {
    if (!store.getState().algorithm.isRunning) {
      break;
    }

    const top = pq.pop();

    // path does not exist
    if (!top) {
      break;
    }

    const { value: node, priority: distance } = top;

    if (visited[node.row][node.col]) {
      continue;
    } else {
      visited[node.row][node.col] = true;
      store.dispatch(setNodeType(node, NodeTypes.TRAVERSED));
    }

    for (const adj of adjacent(node, graph)) {
      const altDist = distance + weights[adj.row][adj.col];

      if (altDist < distances[adj.row][adj.col]) {
        distances[adj.row][adj.col] = altDist;
        previous[adj.row][adj.col] = node;
        pq.push(adj, altDist);
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
