import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';

export default function Title({
  size, text, titleLvl, className,
}) {
  // Heading Title ?
  const Heading = `h${titleLvl}`;
  return (
    <Heading
      className={
        `title${className ? ` ${className}` : ''} title_size_${size}`
      }
    >
      {text}
    </Heading>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(['l', 'm', 's', 'xs']),
  text: PropTypes.string.isRequired,
  titleLvl: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  className: PropTypes.string,
};

Title.defaultProps = {
  titleLvl: '2',
  size: 'm',
  className: '',
};
