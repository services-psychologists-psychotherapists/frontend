import './TitlesDropDownField.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxType,
  titlesDropDownElement,
} from '../../../constants/constants';
import FieldContainer from '../../FieldContainer/FieldContainer';

export default function TitlesDropDownField({
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
      element={titlesDropDownElement}
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

TitlesDropDownField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  dropDownContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeForInput: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

TitlesDropDownField.defaultProps = {
  typeForInput: 'text',
  disabled: false,
  required: false,
};
