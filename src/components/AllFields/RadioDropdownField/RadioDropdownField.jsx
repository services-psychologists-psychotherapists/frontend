import PropTypes from 'prop-types';
import React from 'react';
import { radioDropDownElement, radioType } from '../../../constants/constants';
import FieldContainer from '../../FieldContainer/FieldContainer';

export default function RadioDropdownField({
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
      element={radioDropDownElement}
      typeForDropDown={radioType}
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

RadioDropdownField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  dropDownContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeForInput: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

RadioDropdownField.defaultProps = {
  typeForInput: 'text',
  disabled: false,
  required: false,
};
