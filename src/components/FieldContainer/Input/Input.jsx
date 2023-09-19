import './Input.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDownElement, inputElement,
  radioDropDownElement, titlesDropDownElement
} from '../../../constants/constants';

export default function Input({
  element,
  type,
  name,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  onChange,
  value,
  isValid,
  isEyeOpened
}) {
  const inputClasses = `input
    ${element === inputElement && 'input_hidden-placeholder'}
    ${!isValid && 'input_invalid'} 
    ${disabled && 'input_disabled'}
    ${(element === radioDropDownElement || element === checkboxDropDownElement || element === titlesDropDownElement)
    && 'input_button'}`;

  return (
    <input
      className={inputClasses}
      type={isEyeOpened ? 'text' : type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      autoComplete="new-password"
    />
  );
}

Input.propTypes = {
  element: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isEyeOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
};

Input.defaultProps = {
  element: inputElement,
  required: false,
  isEyeOpened: false,
  disabled: false,
  isValid: true,
  minLength: '',
  maxLength: '',
  onChange: () => {}
};
