import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { INPUT_ICONS } from '../../../constants/constants';

export default function Input({
  type,
  name,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  onChange,
  value,
  setIsFocused,
  isValid,
}) {
  const [isEyeOpened, setIsEyeOpened] = useState(false);

  function showPasswordContent(e) {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  }

  return (
    <>
      <input
        className={`${!isValid && !disabled && 'input_invalid'} ${
          disabled && 'input_disabled'
        } input`}
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {type === 'password' && (
        <button
          className="input__input-icon"
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
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setIsFocused: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};
