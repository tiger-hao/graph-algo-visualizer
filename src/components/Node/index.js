import React from 'react';

import './styles.css';

const Node = ({ row, col, className, onClick, disabled }) => {
  return (
    <button className={`${className} node`} onClick={() => onClick({ row, col })} disabled={disabled} />
  );
};

export default Node;
