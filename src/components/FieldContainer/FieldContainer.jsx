import './FieldContainer.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import FieldTitle from './FieldTitle/FieldTitle';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import DropDownList from './DropDown/DropDownList';
import { inputElement, radioDropDown } from '../../constants/constants';

export default function FieldContainer({
  title,
  type,
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

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCheckBoxValues((prevValues) => ({
      ...prevValues,
      [value]: !!checked,
    }));
  };

  let displayValue;

  if (element === inputElement) {
    displayValue = values[name] || '';
  } else if (element === radioDropDown) {
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
        type={type}
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
        type={element}
        onChange={element === radioDropDown ? handleRadioChange : handleCheckboxChange}
        selectedValue={element === radioDropDown ? displayValue : selectedCheckBoxValues}
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
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  dropDownContent: PropTypes.shape([])
};

FieldContainer.defaultProps = {
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: []
};
