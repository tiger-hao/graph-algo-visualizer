import React from 'react';
import './styles.css';

export const NODE_DIMENSION = 34;

const Node = ({ row, col, className, onClick, disabled }) => {
  return (
    <button
      className={`${className} node`}
      style={{
        height: NODE_DIMENSION,
        width: NODE_DIMENSION
      }}
      onClick={() => onClick({ row, col })}
      disabled={disabled}
    />
  );
};

export default Node;
