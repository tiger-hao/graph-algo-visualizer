import React from 'react';

import './styles.css';

import { NodeTypes } from 'types';
import { adjacent, minDistance } from 'components/Algorithms/dijkstra';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const RunButton = ({ graph, start, end, onClick }) =>  {
  const handleClick = async () => {
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


    let i = 0;
  
    while (Q.size > 0 && i++ < 1050) {
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
        onClick({
          type: "run",
          payload: {
            node: v,
            nodeType: NodeTypes.TRAVERSED,
          },
        });

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
      onClick({
        type: "run",
        payload: {
          node: u,
          nodeType: NodeTypes.PATH,
        },
      });
      u = previous[u.row][u.col];
    }
  };

  return (
    <div className="run-button-bar">
      <button className="run-button" onClick={handleClick}>RUN</button>
    </div>
  );
};

export default RunButton;
