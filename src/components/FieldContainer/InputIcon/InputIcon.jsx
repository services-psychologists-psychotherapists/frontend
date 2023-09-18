import './InputIcon.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropDown,
  INPUT_ICONS,
  inputElement,
  radioDropDown
} from '../../../constants/constants';

export default function InputIcon({
  element,
  disabled,
  type,
  onClick,
  isEyeOpened,
  setIsEyeOpened,
  isValid,
  isFocused
}) {
  const showPasswordContent = (e) => {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  };

  let iconClasses = 'input__icon';
  if ((element === radioDropDown || element === checkboxDropDown) && !isFocused) {
    iconClasses += ' dropdown-input__icon';
  }
  if (isFocused && type !== 'password') {
    iconClasses += ' rotate';
  }

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
    <button
      className={iconClasses}
      onClick={element === inputElement && type === 'password' ? showPasswordContent : onClick}
      disabled={disabled}
    >
      <img
        className={(element === inputElement && type === 'password') ? 'input__icon-img' : 'dropdown-input__icon-img'}
        alt="Input-Icon"
        src={iconSrc}
      />
    </button>
  );
}

InputIcon.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  onClick: PropTypes.func,
  setIsEyeOpened: PropTypes.func.isRequired,
  isEyeOpened: PropTypes.bool.isRequired
};

InputIcon.defaultProps = {
  disabled: false,
  isValid: true,
  onClick() {},
};
