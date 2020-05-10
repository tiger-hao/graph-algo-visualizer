import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Node, { NODE_DIMENSION } from 'components/Node';

const Graph = () => {
  const matrix = useSelector(state => state.graph.matrix);
  const weights = useSelector(state => state.graph.weights);

  return (
    <div className="graph">
      {matrix && matrix.length > 0 && matrix.map((rowArr, rowNum) => {
        return (
          <div
            key={`row ${rowNum}`}
            className="graph-row"
            style={{
              width: NODE_DIMENSION * rowArr.length,
              height: NODE_DIMENSION
            }}
          >
            {rowArr && rowArr.length > 0 && rowArr.map((nodeType, colNum) => {
              return (
                <Node
                  key={`Node (${rowNum}, ${colNum})`}
                  row={rowNum}
                  col={colNum}
                  weight={weights[rowNum][colNum]}
                  nodeType={nodeType}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
