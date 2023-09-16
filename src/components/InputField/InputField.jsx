import './InputField.css';
import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field/Field';
import { inputElement } from '../../constants/constants';

export default function InputField({
  element,
  name,
  title,
  type,
  prompt,
  placeholder,
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
      placeholder={prompt}
      prompt={placeholder}
    />
  );
}

InputField.propTypes = {
  element: PropTypes.oneOf(inputElement).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
};

InputField.defaultProps = {
  prompt: '',
};
