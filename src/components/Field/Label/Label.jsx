import './Label.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function Label({ disabled, title }) {
  return <p className={`label ${disabled && 'label_disabled'}`}>{title}</p>;
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
