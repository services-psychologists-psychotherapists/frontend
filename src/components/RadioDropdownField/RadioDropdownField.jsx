import './RadioDropdownField.css';
import PropTypes from 'prop-types';
import React from 'react';
import { radioDropDown } from '../../constants/constants';
import FieldContainer from '../FieldContainer/FieldContainer';

export default function RadioDropdownField({
  title,
  type,
  name,
  disabled,
  placeholder,
  required,
  dropDownContent,
}) {
  return (
    <FieldContainer
      element={radioDropDown}
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
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

RadioDropdownField.defaultProps = {
  type: 'text',
  disabled: false,
  required: false,
};
