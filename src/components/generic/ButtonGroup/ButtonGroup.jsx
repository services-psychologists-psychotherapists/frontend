import React from 'react';
import './ButtonGroup.css';
import PropTypes from 'prop-types';

export default function ButtonGroup({ children, size }) {
  return <div className={`buttons buttons_size_${size}`}>{children}</div>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['l', 'm', 's']),
};

ButtonGroup.defaultProps = {
  size: 'l',
};
