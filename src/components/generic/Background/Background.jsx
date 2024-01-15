import React from 'react';
import { bool, string } from 'prop-types';
import './Background.css';

export default function Background({
  animated, backgroundClasses,
}) {
  const circleClassName = (size) => (
    `circle circle_size_${size} circle__${size}_${animated && 'animated'}`
  );

  return (
    <div className={`background-container${backgroundClasses ? ` ${backgroundClasses}` : ''}`}>
      <div className="background">
        <div className={circleClassName('s')} />
        <div className={circleClassName('l')} />
        <div className={circleClassName('m')} />
        <div className={circleClassName('xs')} />
      </div>
    </div>
  );
}

Background.propTypes = {
  animated: bool,
  backgroundClasses: string,
};
Background.defaultProps = {
  animated: false,
  backgroundClasses: '',
};
