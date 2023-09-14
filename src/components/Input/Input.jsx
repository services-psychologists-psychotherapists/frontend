import './Input.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import closedEye from '../../images/Input/input-container__closed-eye.svg';
import openedEye from '../../images/Input/input-container__opened-eye.svg';
import openedEyeError from '../../images/Input/input-container__opened-eye_error.svg';
import closedEyeError from '../../images/Input/input-container__closed-eye_error.svg';

export default function Input({
  title,
  type,
  name,
  prompt,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required
}) {
  const [isEyeOpened, setIsEyeOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });

  function showPasswordContent(e) {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  }

  return (
    <div className="input-container">
      <label
        htmlFor={name}
        className={`input-container__label ${
          disabled && 'input-container__label_disabled'
        }`}
      >
        {title}
      </label>
      <div className="input-container__input-wrapper">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={values[name]
              || ''}
            onChange={handleChange}
            className={`input-container__input input-container__textarea-input ${
              !isValid && !disabled && 'input-container__invalid-input'
            } ${disabled && 'input-container__input_disabled'}`}
            placeholder={placeholder}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
          />
        ) : (
          <input
            className={`input-container__input ${
              !isValid && !disabled && 'input-container__invalid-input'
            } ${disabled && 'input-container__input_disabled'}`}
            type={isEyeOpened ? 'text' : type}
            id={name}
            name={name}
            value={values[name]
                || ''}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
          />
        )}
        {type === 'password' && (
          <button
            className="input-container__input-icon"
            onClick={showPasswordContent}
          >
            <img
              alt="Eye-icon"
              src={
                // eslint-disable-next-line no-nested-ternary
                isEyeOpened
                  ? isValid
                    ? openedEye
                    : openedEyeError
                  : isValid
                    ? closedEye
                    : closedEyeError
              }
            />
          </button>
        )}
      </div>
      {(errors[name] && (
        <span className="input-container__span_visible input-container__span_visible-error">
          {errors[name]}
        </span>
      ))
        || (
          !isFocused && !values[name] && prompt && !errors.name && !disabled && (
          <span className="input-container__span_visible input-container__span_visible-prompt">
            {prompt}
          </span>
          ))
        || (
          <span className="input-container__span_not-visible">
            {errors[name]}
          </span>
        )}
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  disabled: false,
  minLength: '',
  maxLength: '',
  required: false
};
