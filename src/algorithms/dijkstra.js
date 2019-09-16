import store from 'store';
import { changeNodeType } from 'actions';
import { NodeTypes } from 'constants/index';

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

export function minDistance(distance, Q) {
  let minDist = Infinity;
  let minNode;

  Q.forEach(element => {
    const { row, col } = element;
    if (distance[row][col] < minDist) {
      minDist = distance[row][col];
      minNode = { row, col };
    }
  });

  return minNode;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dijkstra(graph, start, end) {
  const dispatch = store.dispatch;
  const Q = new Set();
  const rows = graph.length;
  const columns = graph[0].length;

  graph.forEach((rowArr, rowNum) => {
    rowArr.forEach((node, colNum) => {
      Q.add({
        row: rowNum,
        col: colNum
      });
    });
  });

  const distance = [...Array(rows)].map(x =>
    [...Array(columns)].map(x =>
      Infinity
    )
  );

  const previous = [...Array(rows)].map(x =>
    [...Array(columns)].map(x =>
      undefined
    )
  );

  distance[start.row][start.col] = 0;

  while (Q.size > 0) {
    const u = minDistance(distance, Q);

    Q.forEach(element => {
      if(element.row === u.row && element.col === u.col) {
        Q.delete(element);
      }
    });

    if (u.row === end.row && u.col === end.col) {
      break;
    }

    for (const v of adjacent(u, graph)) {
      dispatch(changeNodeType(v, NodeTypes.TRAVERSED));

      const altDist = distance[u.row][u.col] + 1;
      if (altDist < distance[v.row][v.col]) {
        distance[v.row][v.col] = altDist;
        previous[v.row][v.col] = u;
      }
    }

    await sleep(0);
  }

  let u = previous[end.row][end.col];
  while (u.row !== start.row || u.col !== start.col) {
    dispatch(changeNodeType(u, NodeTypes.PATH));
    u = previous[u.row][u.col];
  }
}

export default dijkstra;