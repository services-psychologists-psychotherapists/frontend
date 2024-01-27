import React from 'react';
import { string } from 'prop-types';
import './Preloader.css';

export default function Preloader({ preloaderClassName }) {
  return (
    <div className={`preloader ${preloaderClassName ? ` ${preloaderClassName}` : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
}

Preloader.propTypes = {
  preloaderClassName: string,
};

Preloader.defaultProps = {
  preloaderClassName: '',
};
