import './Field.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../Input/Input';
import FieldButton from '../FieldButton/FieldButton';
import { inputElement } from '../../../constants/constants';

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
  isFocused,
  title,
}) {
  const fieldClasses = `field__input${element !== inputElement ? ' field__input_button' : ''}`;

  const [isEyeOpened, setIsEyeOpened] = useState(false);
  const isInputElement = element === inputElement;
  const isInputPasswordType = type === 'password';
  const showPasswordContent = (e) => {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  };

  const handleClickOnButton = (e) => {
    if (isInputElement && isInputPasswordType) {
      return showPasswordContent(e);
    }
    return onClick(e);
  };

  return (
    <div className={`field field__label${disabled ? ' field__title_disabled' : ''}`}>
      <span className="field__label-text">{title}</span>
      <div
        className={`field__input-container ${
          !isValid && !disabled ? ' field__input-container_invalid' : ''
        } ${disabled ? ' field__input-container_disabled' : ''}`}
      >
        <Input
          element={element}
          onClick={onClick}
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
          isEyeOpened={isEyeOpened}
          ownClasses={fieldClasses}
        />
        <FieldButton
          onClick={handleClickOnButton}
          isFocused={isFocused}
          element={element}
          disabled={disabled}
          inputType={type}
          isEyeOpened={isEyeOpened}
          isValid={isValid}
        />
      </div>
    </div>
  );
}

Field.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  onClick: PropTypes.func,
};

Field.defaultProps = {
  disabled: false,
  required: false,
  isValid: true,
  handleChange: () => {},
  placeholder: null,
  type: null,
  name: null,
  isFocused: false,
  minLength: null,
  maxLength: null,
  onClick: () => {},
};
