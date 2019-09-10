import React from 'react';

import './styles.css';

const Node = ({ key, onClick }) => {
  return (
    <button className="node" onClick={() => onClick(key)}>
    </button>
  );
};

export default Node;
