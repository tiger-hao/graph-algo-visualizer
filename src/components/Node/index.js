import React from 'react';

import './styles.css';

const Node = ({ row, col, className, onClick }) => {
  return (
    <button className={`${className} node`} onClick={() => onClick({ row, col })} />
  );
};

export default Node;
