import './Input.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDown, inputElement,
  radioDropDown
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
    ${element === inputElement && 'text-input'}
    ${!isValid && !disabled && 'input_invalid'} 
    ${disabled && 'input_disabled'}
    ${(element === radioDropDown || element === checkboxDropDown)
    && 'dropdown-input'}`;

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
  element: PropTypes.string.isRequired,
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
  required: false,
  isEyeOpened: false,
  disabled: false,
  isValid: true,
  minLength: '',
  maxLength: '',
  onChange: () => {}
};
