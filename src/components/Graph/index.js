import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { GraphModes, NodeTypes } from 'constants/graph';
import { setNodeType } from 'actions';
import Node from 'components/Node';

const Graph = () => {
  const dispatch = useDispatch();
  const graphMode = useSelector(state => state.graph.graphMode);
  const matrix = useSelector(state => state.graph.matrix);
  const algoRunning = useSelector(state => state.algorithm.isRunning);

  const handleClick = useCallback(({ row, col }) => {
    let nodeType;

    // wall toggling
    if (graphMode === GraphModes.WALL && matrix[row][col] === NodeTypes.WALL) {
      nodeType = NodeTypes.DEFAULT;
    } else {
      nodeType = graphMode;
    }

    dispatch(setNodeType({ row, col }, nodeType));
  }, [dispatch, graphMode, matrix]);

  return (
    <div className="graph">
      {matrix && matrix.length > 0 && matrix.map((rowArr, rowNum) => {
        return (
          <div key={`row ${rowNum}`}>
            {rowArr && rowArr.length > 0 && rowArr.map((value, colNum) => {
              return (
                <Node
                  key={`Node (${rowNum}, ${colNum})`}
                  row={rowNum}
                  col={colNum}
                  className={value}
                  onClick={handleClick}
                  disabled={algoRunning}
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
