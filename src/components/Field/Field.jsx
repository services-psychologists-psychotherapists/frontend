import './Field.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import Input from './Input/Input';
import Label from './Label/Label';
import Prompt from './Prompt/Prompt';

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

  const {
    values, handleChange, errors, isValid
  } = useForm({
    [name]: '',
  });

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
           />
           )
          }
        </div>
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
