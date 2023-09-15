import './Field.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import Input from './Input/Input';
import Label from './Label/Label';
import Prompt from './Prompt/Prompt';
import DropDown from './DropDown/DropDown';

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
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });

  const handleOpenDropDown = (e) => {
    e.preventDefault();
    setIsDropDownOpened(!isDropDownOpened);
  };

  return (
    <div className="field-container">
      <Label
        title={title}
        disabled={disabled}
      />
      <div className="field-container__input-wrapper">
        <div className={`field ${!isValid && !disabled && 'field__invalid-input'} ${disabled && 'field_disabled'}`}>
          {
           element === 'input' && (
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
            element === 'radio' && (
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
                setIsDropDownOpened={setIsDropDownOpened}
                isDropDownOpened={isDropDownOpened}
                disabled={disabled}
              />
            )
          }
        </div>
        <DropDown
          onChange={handleRadioChange}
          selectedValue={selectedValue}
          isDropDownOpened={isDropDownOpened}
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
  required: PropTypes.bool
};

Field.defaultProps = {
  disabled: false,
  required: true,
  minLength: '',
  maxLength: '',
  prompt: ''
};
