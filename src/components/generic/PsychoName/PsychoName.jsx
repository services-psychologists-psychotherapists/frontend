import React from 'react';
import './PsychoName.css';
import { string } from 'prop-types';

export default function PsychoName({
  name,
  description,
  leftText,
  rightText
}) {
  return (
    <div className="name-container">
      <p className="name-container__name">{name}</p>
      {description && (
        <div className="name-container__label">{description}</div>
      )}
      {leftText && (
        <div className="name-container__description">
          <p>{leftText}</p>
          <span className="elipse" />
          <p>{rightText}</p>
        </div>
      )}
    </div>
  );
}

PsychoName.propTypes = {
  name: string.isRequired,
  leftText: string,
  rightText: string,
  description: string,
};

PsychoName.defaultProps = {
  leftText: '',
  rightText: '',
  description: '',
};
