import './CheckboxDropdownField.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDownElement,
  checkboxType,
} from '../../../constants/constants';
import FieldContainer from '../../FieldContainer/FieldContainer';

export default function CheckboxDropdownField({
  title,
  typeForInput,
  name,
  disabled,
  placeholder,
  required,
  dropDownContent,
}) {
  return (
    <FieldContainer
      element={checkboxDropDownElement}
      typeForDropDown={checkboxType}
      typeForInput={typeForInput}
      name={name}
      title={title}
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
  dropDownContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeForInput: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

CheckboxDropdownField.defaultProps = {
  typeForInput: 'text',
  disabled: false,
  required: false,
};
