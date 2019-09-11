import React from 'react';

import './styles.css';

const Node = ({ key, className, onClick }) => {
  return (
    <button className={className} onClick={() => onClick(key)} />
  );
};

export default Node;
