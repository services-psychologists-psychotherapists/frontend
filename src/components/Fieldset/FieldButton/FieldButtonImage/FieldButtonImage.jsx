import './FieldButtonImage.css';
import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_ICONS, inputElement } from '../../../../constants/constants';

export default function FieldButtonImage({
  element, disabled, inputType, isEyeOpened, isValid
}) {
  const isPasswordInputElement = element === inputElement && inputType === 'password';

  const fieldButtonImgClass = isPasswordInputElement
    ? 'field-button__img_password'
    : 'field-button__img_arrow';

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

  const iconSrc = getIconSrc();

  return <img className={fieldButtonImgClass} alt="Field-Icon" src={iconSrc} />;
}

FieldButtonImage.propTypes = {
  element: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  isEyeOpened: PropTypes.bool,
};

FieldButtonImage.defaultProps = {
  isEyeOpened: null,
  inputType: null,
  disabled: false,
  isValid: true,
};
