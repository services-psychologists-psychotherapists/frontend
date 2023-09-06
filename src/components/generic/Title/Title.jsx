import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';

export default function Title({ size, text, titleLvl }) {
  const Heading = `h${titleLvl}`;
  return <Heading className={`title title_size_${size}`}>{text}</Heading>;
}

Title.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  titleLvl: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
};

Title.defaultProp = {
  titleLvl: '2',
};
