import React from 'react';

import './styles.css';

const Node = ({ row, col, className, onClick }) => {
  console.log(row, col, className);
  return (
    <button className={className} onClick={() => onClick({ row, col })} />
  );
};

export default Node;
