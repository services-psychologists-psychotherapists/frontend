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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!fieldRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

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

  return (
    <div className="field-container">
      <Label
        title={title}
        disabled={disabled}
      />
      <div className="field-container__input-wrapper" ref={fieldRef}>
        <div
          className={`field ${!isValid && !disabled && 'field__invalid-input'} ${disabled && 'field_disabled'}`}
        >
          <Input
            isFocused={isFocused}
            type={type}
            name={name}
            value={
              element === inputElement
                ? (values[name] || '')
                : element === radioDropDown
                  ? (selectedValue)
                  : (`${selectedCheckBoxCount === 1
                    ? `Выбран ${selectedCheckBoxCount} вариант`
                    : selectedCheckBoxCount > 1 && selectedCheckBoxCount < 5
                      ? `Выбрано ${selectedCheckBoxCount} варианта`
                      : selectedCheckBoxCount > 5
                        ? `Выбрано ${selectedCheckBoxCount} вариантов`
                        : 'Выберите подходящие варианты'}`)
          }
            onChange={handleChange}
            placeholder={placeholder}
            isValid={isValid}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            setIsFocused={setIsFocused}
            element={element}
            isDropDownOpened={isFocused}
            onClick={handleOpenDropDown}
          />
        </div>
        <DropDown
          element={element}
          onChange={element === radioDropDown ? handleRadioChange : handleCheckboxChange}
          selectedValue={selectedValue}
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
  required: true,
  minLength: '',
  maxLength: '',
  prompt: '',
  dropDownContent: []
};
