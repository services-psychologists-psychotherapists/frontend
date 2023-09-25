import './FieldButton.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDownElement,
  inputElement,
  radioDropDownElement, titlesDropDownElement
} from '../../../constants/constants';
import FieldButtonImage from './FieldButtonImage/FieldButtonImage';

export default function FieldButton({
  element,
  disabled,
  inputType,
  onClick,
  isEyeOpened,
  setIsEyeOpened,
  isValid,
  isFocused
}) {
  const isRadioElement = element === radioDropDownElement;
  const isCheckboxElement = element === checkboxDropDownElement;
  const isTitlesElement = element === titlesDropDownElement;
  const isInputElement = element === inputElement;
  const isInputPasswordType = inputType === 'password';
  const showPasswordContent = (e) => {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  };

  const iconClasses = `field-button${(isFocused && !isInputPasswordType) ? ' rotate' : ''}`;

  const isHaveIcon = isInputPasswordType
      || isRadioElement
      || isCheckboxElement
      || isTitlesElement;

  const handleClickOnButton = (e) => {
    if (isInputElement && isInputPasswordType) {
      return showPasswordContent(e);
    }
    return onClick;
  };

  return (
    isHaveIcon && (
      <div
        className={iconClasses}
        onClick={handleClickOnButton}
        disabled={disabled}
        role="presentation"
        onKeyDown={handleClickOnButton}
      >
        <FieldButtonImage
          inputType={inputType}
          isValid={isValid}
          disabled={disabled}
          element={element}
          isEyeOpened={isEyeOpened}
        />
      </div>
    )
  );
}

FieldButton.propTypes = {
  element: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  onClick: PropTypes.func,
  setIsEyeOpened: PropTypes.func.isRequired,
  isEyeOpened: PropTypes.bool.isRequired
};

FieldButton.defaultProps = {
  disabled: false,
  isValid: true,
  onClick() {},
};
