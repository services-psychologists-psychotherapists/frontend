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
  element
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const fieldRef = useRef(null);

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
          {
           element === inputElement && (
           <Input
             type={type}
             name={name}
             value={values[name] || ''}
             onChange={handleChange}
             placeholder={placeholder}
             isValid={isValid}
             disabled={disabled}
             minLength={minLength}
             maxLength={maxLength}
             required={required}
             setIsFocused={setIsFocused}
             element={element}
           />
           )
          }
          {
            element === radioDropDown && (
              <Input
                type={type}
                name={name}
                value={selectedValue}
                onChange={handleChange}
                placeholder={placeholder}
                isValid={isValid}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                setIsFocused={setIsFocused}
                element={element}
                onClick={handleOpenDropDown}
                isDropDownOpened={isFocused}
                disabled={disabled}
              />
            )
          }
        </div>
        {element === radioDropDown
          && (
          <DropDown
            element={element}
            onChange={handleRadioChange}
            selectedValue={selectedValue}
            isFocused={isFocused}
          />
          )}
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
  required: PropTypes.bool
};

Field.defaultProps = {
  disabled: false,
  required: true,
  minLength: '',
  maxLength: '',
  prompt: ''
};
