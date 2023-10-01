import './Field.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../Input/Input';
import FieldButton from '../FieldButton/FieldButton';

export default function Field({
  type,
  name,
  disabled,
  placeholder,
  minLength,
  maxLength,
  required,
  element,
  handleChange,
  isValid,
  value,
  onClick,
  isFocused
}) {
  const fieldClasses = `field${
    (!isValid && !disabled) ? ' field_invalid' : ''
  }`;

  const [isEyeOpened, setIsEyeOpened] = useState(false);

  return (
    <button className={fieldClasses} onClick={onClick} disabled={disabled}>
      <Input
        value={value}
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        isValid={isValid}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        element={element}
        isEyeOpened={isEyeOpened}
      />
      <FieldButton
        isFocused={isFocused}
        element={element}
        disabled={disabled}
        inputType={type}
        setIsEyeOpened={setIsEyeOpened}
        isEyeOpened={isEyeOpened}
        isValid={isValid}
      />
    </button>
  );
}

Field.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  onClick: PropTypes.func.isRequired
};

Field.defaultProps = {
  name: '',
  isFocused: false,
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
};
