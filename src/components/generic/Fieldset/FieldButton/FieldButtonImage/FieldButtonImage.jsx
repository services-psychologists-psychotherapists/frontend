import './FieldButtonImage.css';
import React from 'react';
import { bool, string } from 'prop-types';
import { INPUT_ICONS, inputElement } from '../../../../../constants/constants';

export default function FieldButtonImage({
  element, disabled, inputType,
  isEyeOpened, isValid, isFocused,
}) {
  const isPasswordInputElement = element === inputElement && inputType === 'password';
  const isRotate = isFocused && !isPasswordInputElement ? ' field-button__img_rotate' : '';
  const fieldButtonImgClass = isPasswordInputElement
    ? 'field-button__img-password'
    : 'field-button__img-arrow';

  const getPasswordIconState = () => {
    if (disabled) {
      return INPUT_ICONS.closedEyeDisabled;
    }
    if (isEyeOpened) {
      return isValid ? INPUT_ICONS.openedEye : INPUT_ICONS.openedEyeError;
    }
    return isValid ? INPUT_ICONS.closedEye : INPUT_ICONS.closedEyeError;
  };

  const getArrowIconState = () => (disabled ? INPUT_ICONS.arrowDisabled : INPUT_ICONS.arrow);

  const getIconSrc = () => {
    if (isPasswordInputElement) {
      return getPasswordIconState();
    }
    return getArrowIconState();
  };

  return <img className={`${fieldButtonImgClass}${isRotate}`} alt="Кнопка" src={getIconSrc()} />;
}

FieldButtonImage.propTypes = {
  element: string.isRequired,
  inputType: string,
  disabled: bool,
  isValid: bool,
  isEyeOpened: bool,
  isFocused: bool,
};

FieldButtonImage.defaultProps = {
  isEyeOpened: null,
  inputType: null,
  disabled: false,
  isValid: true,
  isFocused: false,
};
