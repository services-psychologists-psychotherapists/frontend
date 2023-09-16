import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  checkboxDropDown,
  radioDropDown
} from '../../../constants/constants';
import InputIcon from '../InputIcon/InputIcon';

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
  isFocused,
  onClick
}) {
  const [isEyeOpened, setIsEyeOpened] = useState(false);

  const inputClasses = `input 
    ${isFocused ? 'input_focused' : 'input_initial'} 
    ${!isValid && !disabled && 'input_invalid'} 
    ${disabled && 'input_disabled'}
    ${(element === radioDropDown || element === checkboxDropDown)
    && 'dropdown-input'}`;
  const isHaveIcon = type === 'password' || element === radioDropDown || element === checkboxDropDown;

  return (
    <>
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
        onClick={onClick}
      />
      {isHaveIcon && (
        <InputIcon
          element={element}
          disabled={disabled}
          type={type}
          setIsEyeOpened={setIsEyeOpened}
          onClick={onClick}
          isEyeOpened={isEyeOpened}
          isValid={isValid}
          isFocused={isFocused}
        />
      )}
    </>
  );
}

Input.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  onClick: PropTypes.func
};

Input.defaultProps = {
  required: false,
  isFocused: false,
  disabled: false,
  isValid: true,
  minLength: '',
  maxLength: '',
  onClick: () => {},
  onChange: () => {}
};
