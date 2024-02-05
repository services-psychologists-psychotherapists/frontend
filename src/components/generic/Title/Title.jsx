import React from 'react';
import './Title.css';
import { oneOf, string, object, oneOfType } from 'prop-types';

export default function Title({
  size, text, titleLvl, className,
}) {
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
  size: oneOf(['l', 'm', 's', 'xs']),
  text: oneOfType([string, object]).isRequired,
  titleLvl: oneOf(['1', '2', '3', '4', '5', '6']),
  className: string,
};

Title.defaultProps = {
  titleLvl: '2',
  size: 'm',
  className: '',
};
