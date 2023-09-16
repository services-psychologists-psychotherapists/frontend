import './Field.css';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import Input from './Input/Input';
import Label from './Label/Label';
import Prompt from './Prompt/Prompt';
import DropDown from './DropDown/DropDown';
import { inputElement, radioDropDown } from '../../constants/constants';

export default function Field({
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
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedCheckBoxValues, setSelectedCheckBoxValues] = useState({});
  const fieldRef = useRef(null);

  // eslint-disable-next-line max-len
  const selectedCheckBoxCount = Object.values(selectedCheckBoxValues).filter((value) => value).length;

  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });

  const handleClickOutside = (event) => {
    if (!fieldRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsFocused]);

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

  const fieldClasses = `field 
  ${!isValid && !disabled ? 'field__invalid-input' : ''} 
  ${disabled ? 'field_disabled' : ''}`;

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
      <Label
        title={title}
        disabled={disabled}
      />
      <div className="field-container__input-wrapper" ref={fieldRef}>
        <div className={fieldClasses}>
          <Input
            isFocused={isFocused}
            type={type}
            name={name}
            value={displayValue}
            onChange={handleChange}
            placeholder={placeholder}
            isValid={isValid}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            element={element}
            onClick={handleOpenDropDown}
          />
        </div>
        <DropDown
          element={element}
          onChange={element === radioDropDown ? handleRadioChange : handleCheckboxChange}
          selectedValue={displayValue}
          isFocused={isFocused}
          selectedCheckBoxValues={selectedCheckBoxValues}
          dropDownContent={dropDownContent}
        />
      </div>
      <Prompt
        errors={errors}
        isFocused={isFocused}
        values={values}
        name={name}
        prompt={prompt}
        disabled={disabled}
      />
    </div>
  );
}

Field.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array
};

Field.defaultProps = {
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: []
};
