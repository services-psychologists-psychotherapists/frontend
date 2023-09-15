import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  checkboxDropDown,
  INPUT_ICONS,
  inputElement,
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
  isFocused,
  onClick
}) {
  const [isEyeOpened, setIsEyeOpened] = useState(false);

  function showPasswordContent(e) {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  }

  return (
    <>
      <input
        className={`input ${isFocused ? 'input_focused' : 'input_initial'} ${!isValid && !disabled && 'input_invalid'} ${disabled && 'input_disabled'} 
        ${(element === radioDropDown || element === checkboxDropDown) && 'dropdown-input'}`}
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
      {element === inputElement && type === 'password' && (
        <button
          className="input__icon"
          onClick={showPasswordContent}
          disabled={disabled}
        >
          <img
            alt="Eye-icon"
            src={
              disabled
                ? INPUT_ICONS.closedEyeDisabled
                : isEyeOpened
                  ? isValid
                    ? INPUT_ICONS.openedEye
                    : INPUT_ICONS.openedEyeError
                  : isValid
                    ? INPUT_ICONS.closedEye
                    : INPUT_ICONS.closedEyeError
            }
          />
        </button>
      )}
      {(element === radioDropDown || element === checkboxDropDown) && (
        <button
          className={`input__icon dropdown-input__icon ${isFocused ? 'rotate' : ''}`}
          onClick={onClick}
          disabled={disabled}
        >
          <img
            alt="Arrow-icon"
            src={disabled ? INPUT_ICONS.arrowDisabled : INPUT_ICONS.arrow}
          />
        </button>
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
  required: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  onClick: PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  isValid: true,
  minLength: '',
  maxLength: '',
  onClick() {
  },
  onChange() {
  }
};
