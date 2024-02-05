import './Fieldset.css';
import React, { useState, useEffect } from 'react';
import { string, bool, number,
  arrayOf, objectOf, func, oneOfType, array,
} from 'prop-types';
import Prompt from './Prompt/Prompt';
import Field from './Field/Field';
import ListWithDropdown from './ListWithDropdown/ListWithDropdown';
import {
  checkboxDropdownElement,
  radioDropdownElement,
  titlesDropdownElement,
  inputElement,
} from '../../../constants/constants';

export default function Fieldset({
  title, typeForDropdown, typeForInput,
  name, prompt, disabled, placeholder,
  minLength, maxLength, required,
  element, dropdownContent, values,
  handleChange, errors, isValid,
  promptClasses, fieldsetClasses, inputContainerClasses,
  selectedDropdownItems, id, customElement,
  resetCustomValue, setCustomValue, classesForAbsoluteList,
  classesForInput, autoComplete, pattern,
  readOnly, isIcon, isPrompt, isChangeFocus,
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

  return (
    <fieldset className={`fieldset${fieldsetClasses ? ` ${fieldsetClasses}` : ''}`} id={name}>
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
        inputContainerClasses={inputContainerClasses}
        id={id}
        classesForInput={classesForInput}
        autoComplete={autoComplete}
        pattern={pattern}
        readOnly={readOnly}
        setIsFocused={setIsFocused}
        isChangeFocus={isChangeFocus}
        isFocused={isFocused}
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
        isIcon={isIcon}
      />
      {isPrompt && (
        <Prompt
          errors={errors[name]}
          prompt={prompt}
          disabled={disabled}
          promptClasses={promptClasses}
        />
      )}
    </fieldset>
  );
}

Fieldset.propTypes = {
  element: string.isRequired,
  title: string,
  required: bool,
  disabled: bool,
  placeholder: string,
  prompt: string,
  name: string,
  typeForInput: string,
  minLength: string,
  maxLength: string,
  typeForDropdown: string,
  dropdownContent: arrayOf(string),
  values: objectOf(string),
  handleChange: func,
  errors: objectOf(string),
  isValid: bool,
  promptClasses: string,
  inputContainerClasses: string,
  selectedDropdownItems: objectOf(
    oneOfType([array, string])
  ),
  id: oneOfType([string, number]),
  fieldsetClasses: string,
  customElement: string,
  resetCustomValue: func,
  setCustomValue: func,
  classesForAbsoluteList: string,
  classesForInput: string,
  autoComplete: string,
  pattern: string,
  readOnly: bool,
  isIcon: bool,
  isPrompt: bool,
  isChangeFocus: bool,
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
  title: '',
  pattern: null,
  readOnly: false,
  isIcon: true,
  isPrompt: true,
  isChangeFocus: false,
};
