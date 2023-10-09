import './Input.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDownElement,
  inputElement,
  radioDropDownElement,
  titlesDropDownElement,
} from '../../../constants/constants';
import TitlesContainer from '../TitlesContainer/TitlesContainer';

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
  isEyeOpened,
  ownClasses,
  onClick,
}) {
  const inputClasses = `input${element === inputElement ? ' input_hidden-placeholder' : ''}${
    !isValid ? ' input_invalid' : ''
  }${
    element === radioDropDownElement
    || element === checkboxDropDownElement
    || element === titlesDropDownElement
      ? ' input_button'
      : ''
  }`;

  return element === titlesDropDownElement ? (
    <ul
      role="menu"
      onKeyDown={onClick}
      onClick={onClick}
      className={`${inputClasses} ${ownClasses}`}
    >
      <TitlesContainer placeholder={placeholder} value={value} element={element} />
    </ul>
  ) : (
    <input
      onClick={onClick}
      className={`${inputClasses} ${ownClasses}`}
      type={isEyeOpened ? 'text' : type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={!inputElement ? true : disabled}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
  );
}

Input.propTypes = {
  element: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  required: PropTypes.bool,
  isEyeOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  ownClasses: PropTypes.string,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  element: inputElement,
  value: null,
  placeholder: null,
  name: null,
  type: null,
  ownClasses: null,
  required: false,
  isEyeOpened: false,
  disabled: false,
  isValid: true,
  minLength: null,
  maxLength: null,
  onChange: () => {},
  onClick: () => {},
};
