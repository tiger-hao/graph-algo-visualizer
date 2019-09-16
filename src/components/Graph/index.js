import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { GraphModes, NodeTypes } from 'constants/graph';
import { changeNodeType } from 'actions';
import Node from 'components/Node';

const Graph = ({ graphMode }) => {
  const dispatch = useDispatch();
  const { matrix, algoRunning } = useSelector(state => ({
    matrix: state.graph.matrix,
    algoRunning: state.algorithm.isRunning,
  }));

  const handleClick = useCallback(({ row, col }) => {
    let nodeType;

    // wall toggling
    if (graphMode === GraphModes.WALL && matrix[row][col] === NodeTypes.WALL) {
      nodeType = NodeTypes.DEFAULT;
    } else {
      nodeType = graphMode;
    }

    dispatch(changeNodeType({ row, col }, nodeType));
  }, [dispatch, graphMode, matrix]);

  return (
    <div className="graph">
      {matrix && matrix.length > 0 && matrix.map((rowArr, rowNum) => {
        return (
          <div>
            {rowArr && rowArr.length > 0 && rowArr.map((value, colNum) => {
              return (
                <Node row={rowNum} col={colNum} className={value}  onClick={handleClick} disabled={algoRunning} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
