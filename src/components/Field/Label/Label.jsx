import './Label.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function Label({ disabled, title }) {
  return (
    <p
      className={`field-container__label ${
        disabled && 'field-container__label_disabled'
      }`}
    >
      {title}
    </p>
  );
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
