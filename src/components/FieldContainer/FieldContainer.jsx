import './FieldContainer.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import FieldTitle from './FieldTitle/FieldTitle';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import DropDownList from './DropDownList/DropDownList';
import {
  checkboxType,
  inputElement,
  radioDropDownElement,
  radioType
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
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedCheckBoxValues, setSelectedCheckBoxValues] = useState({});
  const selectedCheckBoxCount = (
    Object.values(selectedCheckBoxValues).filter((value) => value).length
  );
  const [isFocused, setIsFocused] = useState(false);
  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });

  const handleOpenDropDown = (e) => {
    e.preventDefault();
    setIsFocused(!isFocused);
  };

  let displayValue;
  const handleDropdownItemChange = (changedItem) => {
    if (changedItem.type === radioType) {
      setSelectedValue(changedItem.value);
    } else if (changedItem.type === checkboxType) {
      setSelectedCheckBoxValues(changedItem.value);
    }
  };

  if (element === inputElement) {
    displayValue = values[name] || '';
  } else if (element === radioDropDownElement) {
    displayValue = selectedValue;
  } else {
    switch (true) {
      case selectedCheckBoxCount === 1:
        displayValue = `Выбран ${selectedCheckBoxCount} вариант`;
        break;
      case selectedCheckBoxCount > 1 && selectedCheckBoxCount < 5:
        displayValue = `Выбрано ${selectedCheckBoxCount} варианта`;
        break;
      case selectedCheckBoxCount >= 5:
        displayValue = `Выбрано ${selectedCheckBoxCount} вариантов`;
        break;
      default:
        displayValue = 'Выберите подходящие варианты';
        break;
    }
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
        selectedValue={element === radioDropDownElement ? displayValue : selectedCheckBoxValues}
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
