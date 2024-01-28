import React from 'react';
import './ButtonGroup.css';
import { oneOf, node, string } from 'prop-types';

export default function ButtonGroup({ children, size, className }) {
  return (
    <div
      className={`buttons buttons_size_${size}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: node.isRequired,
  size: oneOf(['l', 'm', 's']),
  className: string,
};

ButtonGroup.defaultProps = {
  size: 'l',
  className: '',
};
