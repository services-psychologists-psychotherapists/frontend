import React from 'react';
import PropTypes from 'prop-types';
import './Background.css';

export default function Background({ animated }) {
  function circleClassName(size) {
    return `circle circle_size_${size} circle__${size}_${animated && 'animated'}`;
  }
  return (
    <div className="background">
      <div className={circleClassName('s')} />
      <div className={circleClassName('l')} />
      <div className={circleClassName('m')} />
      <div className={circleClassName('xs')} />
    </div>
  );
}

Background.propTypes = {
  animated: PropTypes.bool.isRequired,
};
