import './InputField.css';
import React from 'react';
import PropTypes from 'prop-types';
import FieldContainer from '../FieldContainer/FieldContainer';
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
  dropDownContent,
}) {
  return (
    <FieldContainer
      element={inputElement}
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
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  dropDownContent: PropTypes.shape([]),
};

InputField.defaultProps = {
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: [],
};
