import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';

export function Title({ size, text }) {
  return <h2 className={`title title_size_${size}`}>{text}</h2>;
}

Title.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
