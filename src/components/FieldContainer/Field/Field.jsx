import './Field.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../Input/Input';
import { checkboxDropDown, radioDropDown } from '../../../constants/constants';
import InputIcon from '../InputIcon/InputIcon';

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
  const fieldClasses = `field ${!isValid && !disabled && 'field__invalid-input'} ${disabled && 'field_disabled'}`;

  const [isEyeOpened, setIsEyeOpened] = useState(false);

  const isHaveIcon = type === 'password'
      || element === radioDropDown
      || element === checkboxDropDown;

  return (
    <button className={fieldClasses} onClick={onClick}>
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
      {isHaveIcon && (
      <InputIcon
        isFocused={isFocused}
        element={element}
        disabled={disabled}
        type={type}
        setIsEyeOpened={setIsEyeOpened}
        isEyeOpened={isEyeOpened}
        isValid={isValid}
      />
      )}
    </button>
  );
}

Field.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Field.defaultProps = {
  isFocused: false,
  disabled: false,
  required: false,
  minLength: '',
  maxLength: '',
};
