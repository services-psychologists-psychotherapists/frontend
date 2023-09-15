import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { INPUT_ICONS, inputElement, radioDropDown } from '../../../constants/constants';

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
        className={`input ${!isValid && !disabled && 'input_invalid'} ${disabled && 'input_disabled'} 
        ${element === radioDropDown && 'radio-input'}`}
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
      {element === radioDropDown && (
        <button
          className={`input__icon radio-input__icon ${isFocused ? 'rotate' : ''}`}
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
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool,
  onClick: PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  isFocused: false,
  onClick() {
  }
};
