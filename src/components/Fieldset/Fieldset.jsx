import './Fieldset.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import ListWithDropdown from './ListWithDropdown/ListWithDropdown';
import {
  checkboxDropdownElement,
  radioDropdownElement,
  titlesDropdownElement,
  inputElement,
} from '../../constants/constants';

export default function Fieldset({
  title,
  typeForDropdown,
  typeForInput,
  name,
  prompt,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  element,
  dropdownContent,
  values,
  handleChange,
  errors,
  isValid,
  promptClasses,
  fieldsetClasses,
  inputContainerClasses,
  selectedDropdownItems,
  id,
  customElement,
  resetCustomValue,
  setCustomValue,
  classesForAbsoluteList,
  classesForInput,
  autoComplete,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState('');

  const selectedCheckBoxCount = selectedDropdownItems[name]
    ? selectedDropdownItems[name].length
    : 0;
  const selectedTitles = selectedDropdownItems[name] || [];

  const handleOpenDropdown = (e) => {
    e.preventDefault();
    setIsFocused(!isFocused);
  };

  const getInputValue = () => (element === inputElement ? values[name] : displayValue);

  const getHandleChangeForDropdown = () => (typeForDropdown ? () => {} : handleChange);

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

    if (element === radioDropdownElement) {
      setDisplayValue(selectedDropdownItems[name]);
    }

    if (element === checkboxDropdownElement) {
      getDescrSelectedElements(selectedCheckBoxCount);
    }

    if (element === titlesDropdownElement) {
      setDisplayValue(selectedTitles);
    }
  }, [selectedDropdownItems]);

  const getFielsetClasses = (classes) => (classes ? ` ${classes}` : '');

  return (
    <fieldset className={`fieldset${getFielsetClasses(fieldsetClasses)}`} id={name}>
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
        onChange={getHandleChangeForDropdown()}
        onClick={handleOpenDropdown}
        isFocused={isFocused}
        inputContainerClasses={inputContainerClasses}
        id={id}
        classesForInput={classesForInput}
        autoComplete={autoComplete}
      />
      <ListWithDropdown
        element={element}
        type={typeForDropdown}
        onChange={handleChange}
        isFocused={isFocused}
        dropdownContent={dropdownContent}
        name={name}
        selectedDropdownItems={selectedDropdownItems}
        values={values}
        customElement={customElement}
        resetCustomValue={resetCustomValue}
        setCustomValue={setCustomValue}
        classesForAbsoluteList={classesForAbsoluteList}
      />
      <Prompt
        errors={errors[name]}
        prompt={prompt}
        disabled={disabled}
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
  typeForDropdown: PropTypes.string,
  dropdownContent: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  isValid: PropTypes.bool,
  promptClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string,
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fieldsetClasses: PropTypes.string,
  customElement: PropTypes.string,
  resetCustomValue: PropTypes.func,
  setCustomValue: PropTypes.func,
  classesForAbsoluteList: PropTypes.string,
  classesForInput: PropTypes.string,
  autoComplete: PropTypes.string,
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
  typeForDropdown: null,
  dropdownContent: [],
  errors: null,
  isValid: true,
  handleChange: () => {},
  promptClasses: '',
  inputContainerClasses: '',
  selectedDropdownItems: {},
  id: null,
  fieldsetClasses: '',
  customElement: '',
  resetCustomValue: () => {},
  setCustomValue: () => {},
  classesForAbsoluteList: '',
  classesForInput: '',
  autoComplete: null,
};
