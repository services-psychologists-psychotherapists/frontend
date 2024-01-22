import React from 'react';
import './ButtonGroup.css';
import { oneOf, node } from 'prop-types';

export default function ButtonGroup({ children, size }) {
  return <div className={`buttons buttons_size_${size}`}>{children}</div>;
}

ButtonGroup.propTypes = {
  children: node.isRequired,
  size: oneOf(['l', 'm', 's']),
};

ButtonGroup.defaultProps = {
  size: 'l',
};
