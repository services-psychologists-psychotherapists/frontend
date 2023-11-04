import React from 'react';
import './PsychoName.css';
import { string } from 'prop-types';
import Title from '../Title/Title';

export default function PsychoName({ name, description, leftText, rightText }) {
  return (
    <div className="name-container">
      <Title size="s" titleLvl="4" text={name} />
      {description && <div className="name-container__label">{description}</div>}
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
