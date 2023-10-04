import './FieldTitle.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function FieldTitle({ disabled, title }) {
  return <p className={`field-title${disabled ? ' field-title_disabled' : ''}`}>{title}</p>;
}

FieldTitle.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
