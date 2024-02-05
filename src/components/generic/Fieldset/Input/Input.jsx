import './Input.css';
import {
  string, oneOfType, func,
  bool, arrayOf, number,
} from 'prop-types';
import React from 'react';
import {
  inputElement,
  titlesDropdownElement,
} from '../../../../constants/constants';
import TitlesContainer from '../TitlesContainer/TitlesContainer';

export default function Input({
  element, type, name,
  disabled, placeholder, minLength,
  maxLength, required, onChange,
  value, isValid, isEyeOpened,
  ownClasses, onClick, id,
  classesForInput, autoComplete,
  pattern, readOnly,
}) {
  const inputClasses = `input${
    element === inputElement ? ' input_type_hidden-placeholder' : ''}${
    !isValid ? ' input_type_invalid' : ''
  }`;

  return element === titlesDropdownElement ? (
    <ul
      role="menu"
      onKeyDown={onClick}
      onClick={onClick}
      className={`list-${inputClasses} ${ownClasses}${classesForInput ? ` ${classesForInput}` : ''}`}
    >
      <TitlesContainer placeholder={placeholder} value={value} element={element} />
    </ul>
  ) : (
    <input
      onClick={onClick}
      className={`${inputClasses} ${ownClasses}${classesForInput ? ` ${classesForInput}` : ''}`}
      type={isEyeOpened ? 'text' : type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={!inputElement ? true : disabled}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      autoComplete={autoComplete}
      pattern={pattern}
      readOnly={readOnly}
    />
  );
}

Input.propTypes = {
  element: string,
  type: string,
  name: string,
  placeholder: string,
  value: oneOfType([string, arrayOf(string)]),
  required: bool,
  isEyeOpened: bool,
  disabled: bool,
  minLength: string,
  maxLength: string,
  onChange: func,
  isValid: bool,
  ownClasses: string,
  onClick: func,
  id: oneOfType([string, number]),
  classesForInput: string,
  autoComplete: string,
  pattern: string,
  readOnly: bool,
};

Input.defaultProps = {
  element: inputElement,
  value: '',
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
  id: null,
  classesForInput: '',
  autoComplete: null,
  pattern: null,
  readOnly: false,
};
