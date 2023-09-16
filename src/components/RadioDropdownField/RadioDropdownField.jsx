import './RadioDropdownField.css';
import PropTypes from 'prop-types';
import React from 'react';
import { radioDropDown } from '../../constants/constants';
import Field from '../Field/Field';

export default function RadioDropdownField({
  title,
  type,
  name,
  disabled,
  placeholder,
  required,
  element,
  dropDownContent,
}) {
  if (!radioDropDown.includes(element)) {
    throw new Error(`Недопустимое значение для пропса 'element': ${element}`);
  }

  return (
    <Field
      element={element}
      name={name}
      title={title}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      dropDownContent={dropDownContent}
    />
  );
}

RadioDropdownField.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

RadioDropdownField.defaultProps = {
  disabled: false,
  required: false,
};
