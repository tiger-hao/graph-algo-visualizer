import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { GraphModes, NodeTypes } from 'constants/graph';
import { setNodeType, setNodeWeight } from 'actions';

export const NODE_DIMENSION = 45;

const Node = ({ row, col, weight, nodeType }) => {
  const graphMode = useSelector(state => state.graph.graphMode);
  const algoRunning = useSelector(state => state.algorithm.isRunning);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (graphMode === GraphModes.WEIGHT) {
      if (nodeType !== NodeTypes.WALL && nodeType !== NodeTypes.START && nodeType !== NodeTypes.END) {
        let newWeight = weight;

        do {
          newWeight = prompt("Enter a positive number.");

          if (newWeight === null) {
            return;
          }

          newWeight = parseInt(newWeight, 10);
        } while (isNaN(newWeight) || newWeight < 1);

        dispatch(setNodeWeight({ row, col }, newWeight));
      } else {
        alert("Cannot add weight to start, end, or wall node.");
      }
    } else {
      if (nodeType !== NodeTypes.START && nodeType !== NodeTypes.END && weight === 1) {
        let newNodeType;

        // wall toggling
        if (graphMode === GraphModes.WALL && nodeType === NodeTypes.WALL) {
          newNodeType = NodeTypes.DEFAULT;
        } else {
          newNodeType = graphMode;
        }

        dispatch(setNodeType({ row, col }, newNodeType));
      } else {
        alert("Cannot overwrite start, end, or weighted node.");
      }
    }
  }, [dispatch, graphMode, row, col, weight, nodeType]);

  return (
    <span
      className={'node-container'}
      style={{
        height: NODE_DIMENSION,
        width: NODE_DIMENSION
      }}
    >
      <button
        className={`${nodeType} node`}
        onClick={onClick}
        disabled={algoRunning}
      >
        {weight > 1 && weight}
      </button>
    </span>
  );
};

export default Node;
