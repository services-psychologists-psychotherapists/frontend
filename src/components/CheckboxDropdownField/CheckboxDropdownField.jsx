import './CheckboxDropdownField.css';
import PropTypes from 'prop-types';
import React from 'react';
import { checkboxDropDown } from '../../constants/constants';
import FieldContainer from '../FieldContainer/FieldContainer';

export default function CheckboxDropdownField({
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
      element={checkboxDropDown}
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

CheckboxDropdownField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

CheckboxDropdownField.defaultProps = {
  type: 'text',
  disabled: false,
  required: false,
};
