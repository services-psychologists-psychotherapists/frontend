import './Fieldset.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import DropDownList from './DropDownList/DropDownList';
import {
  checkboxDropDownElement,
  radioDropDownElement,
  titlesDropDownElement,
  inputElement,
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
  isValid,
  promptClasses,
  inputContainerClasses,
  selectedDropdownItems,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState('');

  const selectedCheckBoxCount = selectedDropdownItems[name]
    ? selectedDropdownItems[name].length
    : 0;
  const selectedTitles = selectedDropdownItems[name] || [];

  const handleOpenDropDown = (e) => {
    e.preventDefault();
    setIsFocused(!isFocused);
  };

  const getInputValue = () => (element === inputElement ? values[name] : displayValue);

  useEffect(() => {
    const getDescrSelectedElements = (countElements) => {
      if (countElements === 0) {
        return setDisplayValue('');
      }

      if (countElements === 1) {
        return setDisplayValue('Выбран 1 вариант');
      }

      if (countElements < 5 && countElements >= 2) {
        return setDisplayValue(`Выбрано ${countElements} варианта`);
      }

      return setDisplayValue(`Выбрано ${countElements} вариантов`);
    };

    if (element === radioDropDownElement) {
      setDisplayValue(selectedDropdownItems[name]);
    }

    if (element === checkboxDropDownElement) {
      getDescrSelectedElements(selectedCheckBoxCount);
    }

    if (element === titlesDropDownElement) {
      setDisplayValue(selectedTitles);
    }
  }, [selectedDropdownItems]);

  return (
    <fieldset className="fieldset">
      <Field
        element={element}
        title={title}
        type={typeForInput}
        name={name}
        value={getInputValue()}
        disabled={disabled}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        isValid={isValid}
        handleChange={handleChange}
        onClick={handleOpenDropDown}
        isFocused={isFocused}
        inputContainerClasses={inputContainerClasses}
      />
      <DropDownList
        element={element}
        type={typeForDropDown}
        onChange={handleChange}
        isFocused={isFocused}
        dropDownContent={dropDownContent}
        name={name}
        selectedDropdownItems={selectedDropdownItems}
        handleChange={handleChange}
        values={values}
      />
      <Prompt
        errors={errors[name]}
        prompt={prompt}
        disabled={disabled}
        values={values[name]}
        promptClasses={promptClasses}
      />
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
  values: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  isValid: PropTypes.bool,
  promptClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string,
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
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
  handleChange: () => {},
  promptClasses: '',
  inputContainerClasses: '',
  selectedDropdownItems: {},
};
