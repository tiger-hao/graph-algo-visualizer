import { NodeTypes } from 'types';

function adjacent(node, graph) {
  const { row, col } = node;
  const adjacentNodes = new Set();

  if (graph[row][col + 1] !== NodeTypes.WALL) {
    adjacentNodes.add({ row, col: col + 1 });
  }

  if (graph[row][col - 1] !== NodeTypes.WALL) {
    adjacentNodes.add({ row, col: col - 1 });
  }

  if (graph[row + 1][col] !== NodeTypes.WALL) {
    adjacentNodes.add({ row: row + 1, col });
  }

  if (graph[row - 1][col] !== NodeTypes.WALL) {
    adjacentNodes.add({ row: row - 1, col });
  }

  return adjacentNodes;
}

function minDistance(distanceArr) {
  let minDist = Infinity;
  let minNode;

  distanceArr.forEach((rowArr, rowNum) => {
    rowArr.forEach((distance, colNum) => {
      if (distance < minDist) {
        minDist = distance;
        minNode = { rowNum, colNum };
      }
    });
  });

  return minNode;
}

function dijkstra(graph, start) {
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

  const distance = [...Array(rows).map(x =>
    [...Array[columns].map(x =>
      Infinity
    )]
  )];

  const previous = [...Array(rows).map(x =>
    [...Array[columns].map(x =>
      undefined
    )]
  )];

  distance[start.row][start.col] = 0;

  while (Q.size > 0) {
    const u = minDistance(distance);
    Q.delete(u);

    for (const v of adjacent(u, graph)) {
      const altDist = distance[u.row][u.col] + 1;
      if (altDist < distance[v.row][v.col]) {
        distance[v.row][v.col] = altDist;
        previous[v.row][v.col] = u;
      }
    }


  }
}
