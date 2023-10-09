import './Fieldset.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import DropDownList from './DropDownList/DropDownList';
import {
  checkboxDropDownElement,
  checkboxType,
  inputElement,
  radioDropDownElement,
  radioType,
} from '../../constants/constants';

export default function Fieldset({
  title,
  typeForDropDown,
  typeForInput,
  name,
  prompt,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  element,
  dropDownContent,
  values,
  handleChange,
  errors,
  isValid
}) {
  const [selectedValue, setSelectedValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const selectedCheckBoxCount = Object.values(selectedValue).filter((value) => value).length;
  const selectedTitles = Object.keys(selectedValue).filter((key) => selectedValue[key]);

  const handleOpenDropDown = (e) => {
    e.preventDefault();
    setIsFocused(!isFocused);
  };

  const handleDropdownItemChange = (changedItem) => {
    setSelectedValue(changedItem.value);
  };

  let displayValue;
  if (element === inputElement) {
    displayValue = values[name] || '';
  } else if (element === radioDropDownElement && typeForDropDown === checkboxType) {
    displayValue = selectedTitles;
  } else if (element === radioDropDownElement) {
    displayValue = selectedValue;
  } else if (element === checkboxDropDownElement && typeForDropDown === radioType) {
    switch (true) {
      case selectedCheckBoxCount === 0:
        displayValue = '';
        break;
      default:
        displayValue = 'Выбран 1 вариант';
        break;
    }
  } else if (element === checkboxDropDownElement) {
    const lastDigit = selectedCheckBoxCount % 10;
    switch (true) {
      case selectedCheckBoxCount === 0:
        displayValue = '';
        break;
      case selectedCheckBoxCount === 11:
        displayValue = `Выбрано ${selectedCheckBoxCount} вариантов`;
        break;
      case lastDigit === 1 && selectedCheckBoxCount !== 11:
        displayValue = `Выбран ${selectedCheckBoxCount} вариант`;
        break;
      case lastDigit >= 2
        && lastDigit <= 4
        && (selectedCheckBoxCount < 12 || selectedCheckBoxCount > 14):
        displayValue = `Выбрано ${selectedCheckBoxCount} варианта`;
        break;
      default:
        displayValue = `Выбрано ${selectedCheckBoxCount} вариантов`;
        break;
    }
  } else {
    displayValue = selectedTitles;
  }

  return (
    <fieldset className="fieldset">
      <Field
        element={element}
        title={title}
        type={typeForInput}
        name={name}
        value={displayValue}
        disabled={disabled}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        isValid={isValid}
        handleChange={handleChange}
        onClick={handleOpenDropDown}
        isFocused={isFocused}
      />
      <DropDownList
        element={element}
        type={typeForDropDown}
        onChange={handleDropdownItemChange}
        selectedValue={selectedValue}
        isFocused={isFocused}
        dropDownContent={dropDownContent}
      />
      <Prompt errors={errors[name]} prompt={prompt} disabled={disabled} values={values[name]} />
    </fieldset>
  );
}

Fieldset.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  prompt: PropTypes.string,
  name: PropTypes.string,
  typeForInput: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  typeForDropDown: PropTypes.string,
  dropDownContent: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.objectOf,
  handleChange: PropTypes.func,
  errors: PropTypes.string,
  isValid: PropTypes.bool
};

Fieldset.defaultProps = {
  values: null,
  required: false,
  disabled: false,
  placeholder: null,
  prompt: null,
  name: null,
  typeForInput: null,
  minLength: null,
  maxLength: null,
  typeForDropDown: null,
  dropDownContent: [],
  errors: null,
  isValid: true,
  handleChange: () => {}
};
