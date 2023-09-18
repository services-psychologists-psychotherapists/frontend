import './FieldButtonImage.css';
import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_ICONS, inputElement } from '../../../../constants/constants';

export default function FieldButtonImage({
  element,
  disabled,
  type,
  isEyeOpened,
  isValid,
}) {
  let iconSrc;
  if (element === inputElement && type === 'password') {
    if (disabled) {
      iconSrc = INPUT_ICONS.closedEyeDisabled;
    } else if (isEyeOpened) {
      iconSrc = isValid ? INPUT_ICONS.openedEye : INPUT_ICONS.openedEyeError;
    } else {
      iconSrc = isValid ? INPUT_ICONS.closedEye : INPUT_ICONS.closedEyeError;
    }
  } else {
    iconSrc = disabled ? INPUT_ICONS.arrowDisabled : INPUT_ICONS.arrow;
  }

  return (
    <img
      className={
        element === inputElement && type === 'password'
          ? 'field-button__img_password'
          : 'field-button__img_arrow'
      }
      alt="Field-Icon"
      src={iconSrc}
    />
  );
}

FieldButtonImage.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  isEyeOpened: PropTypes.bool.isRequired,
};

FieldButtonImage.defaultProps = {
  disabled: false,
  isValid: true,
};
