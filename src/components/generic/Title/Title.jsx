import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';

export default function Title({ size, text, titleLvl }) {
  // Heading Title ?
  const Heading = `h${titleLvl}`;
  return <Heading className={`title title_size_${size}`}>{text}</Heading>;
}

Title.propTypes = {
  size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
  text: PropTypes.string.isRequired,
  titleLvl: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Title.defaultProps = {
  titleLvl: '2',
  size: 'm',
};
