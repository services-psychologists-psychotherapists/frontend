import './FieldContainer.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import FieldTitle from './FieldTitle/FieldTitle';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import DropDownList from './DropDownList/DropDownList';
import {
  checkboxDropDownElement,
  inputElement,
  radioDropDownElement,
} from '../../constants/constants';

export default function FieldContainer({
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
  dropDownContent
}) {
  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });
  const [selectedValue, setSelectedValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const selectedCheckBoxCount = (
    Object.values(selectedValue).filter((value) => value).length
  );
  const selectedTitles = (
    Object.keys(selectedValue).filter((key) => selectedValue[key])
  );

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
  } else if (element === radioDropDownElement) {
    displayValue = selectedValue;
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
      case lastDigit >= 2 && lastDigit <= 4
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
    <div className="field-container">
      <FieldTitle
        title={title}
        disabled={disabled}
      />
      <Field
        type={typeForInput}
        name={name}
        value={displayValue}
        disabled={disabled}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        element={element}
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
      <Prompt
        errors={errors[name]}
        prompt={prompt}
        disabled={disabled}
      />
    </div>
  );
}

FieldContainer.propTypes = {
  title: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  typeForInput: PropTypes.string.isRequired,
  typeForDropDown: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  dropDownContent: PropTypes.arrayOf(PropTypes.string)
};

FieldContainer.defaultProps = {
  typeForDropDown: '',
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: []
};
