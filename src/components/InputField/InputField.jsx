import './InputField.css';
import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field/Field';
import { inputElement } from '../../constants/constants';

export default function InputField({
  title,
  type,
  name,
  prompt,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  element,
  dropDownContent,
}) {
  if (!inputElement.includes(element)) {
    throw new Error(`Недопустимое значение для пропса 'element': ${element}`);
  }

  return (
    <Field
      element={element}
      name={name}
      title={title}
      type={type}
      placeholder={placeholder}
      prompt={prompt}
      disabled={disabled}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      dropDownContent={dropDownContent}
    />
  );
}

InputField.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array,
};

InputField.defaultProps = {
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: [],
};
