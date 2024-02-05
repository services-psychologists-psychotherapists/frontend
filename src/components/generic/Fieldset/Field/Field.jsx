import React, { useState } from 'react';
import './Field.css';
import {
  string, bool, number,
  arrayOf, func, oneOfType,
} from 'prop-types';
import Input from '../Input/Input';
import FieldButton from '../FieldButton/FieldButton';
import { inputElement } from '../../../../constants/constants';

export default function Field({
  type, name, disabled,
  placeholder, minLength, maxLength,
  required, element, isValid,
  value, onClick, readOnly,
  title, inputContainerClasses,
  id, onChange, classesForInput,
  autoComplete, pattern, setIsFocused,
  isChangeFocus, isFocused,
}) {
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

  const getDisabledField = (disabledStatus) => (
    disabledStatus ? ' field_type_disabled' : ''
  );

  return (
    <div className={`field field_type_label${getDisabledField(disabled)}`}>
      <span className={`field__text${getDisabledField(disabled)}`}>{title}</span>
      <div
        className={`field__input-container${inputContainerClasses
          ? ` ${inputContainerClasses}` : ''}${
          !isValid && !disabled ? ' field__input-container_type_invalid' : ''
        }${disabled ? ' field__input-container_type_disabled' : ''}`}
      >
        <Input
          element={element}
          onClick={onClick}
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          isValid={isValid}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          isEyeOpened={isEyeOpened}
          ownClasses="field__input"
          id={id}
          classesForInput={classesForInput}
          autoComplete={autoComplete}
          pattern={pattern}
          readOnly={readOnly}
        />
        <FieldButton
          onClick={handleClickOnButton}
          element={element}
          disabled={disabled}
          inputType={type}
          isEyeOpened={isEyeOpened}
          isValid={isValid}
          setIsFocused={setIsFocused}
          isChangeFocus={isChangeFocus}
          isFocused={isFocused}
        />
      </div>
    </div>
  );
}

Field.propTypes = {
  element: string.isRequired,
  title: string,
  onChange: func,
  isValid: bool,
  required: bool,
  disabled: bool,
  placeholder: string,
  type: string,
  name: string,
  minLength: string,
  maxLength: string,
  value: oneOfType([string, arrayOf(string)]),
  onClick: func,
  inputContainerClasses: string,
  id: oneOfType([string, number]),
  classesForInput: string,
  autoComplete: string,
  pattern: string,
  readOnly: bool,
  setIsFocused: func,
  isChangeFocus: bool,
  isFocused: bool,
};

Field.defaultProps = {
  disabled: false,
  required: false,
  isValid: true,
  onChange: () => {},
  placeholder: null,
  type: null,
  name: null,
  minLength: null,
  maxLength: null,
  onClick: () => {},
  inputContainerClasses: '',
  value: '',
  id: null,
  classesForInput: '',
  autoComplete: null,
  title: '',
  pattern: null,
  readOnly: false,
  setIsFocused: () => {},
  isChangeFocus: false,
  isFocused: false,
};
