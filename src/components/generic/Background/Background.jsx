import React, { useEffect, useRef } from 'react';
import { bool } from 'prop-types';
import './Background.css';

export default function Background({ animationStatus }) {
  const circleClassName = (size) => (
    `circle circle_size_${size}${animationStatus ? ` circle_${size}_animated` : ''}`
  );

  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const welcomeElement = document.querySelector('.welcome');
      const headerElement = document.querySelector('.header');

      if (welcomeElement && headerElement && backgroundRef.current) {
        const newHeight = welcomeElement.offsetHeight + headerElement.offsetHeight;
        backgroundRef.current.style.height = `${newHeight}px`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="background-container"
    >
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
  animationStatus: bool,
};

Background.defaultProps = {
  animationStatus: false,
};
