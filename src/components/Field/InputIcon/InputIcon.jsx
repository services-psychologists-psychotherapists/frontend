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
  element, disabled, type, onClick, isEyeOpened, setIsEyeOpened, isValid, isFocused
}) {
  function showPasswordContent(e) {
    e.preventDefault();
    setIsEyeOpened(!isEyeOpened);
  }

  return (
    <button
      className={`input__icon ${(element === radioDropDown || element === checkboxDropDown) && 'dropdown-input__icon'} ${isFocused ? 'rotate' : ''}`}
      onClick={(element === inputElement && type === 'password') ? showPasswordContent : onClick}
      disabled={disabled}
    >
      <img
        alt="Input-Icon"
        src={
            (element === inputElement && type === 'password') ? (
              disabled
                ? INPUT_ICONS.closedEyeDisabled
                : isEyeOpened
                  ? isValid
                    ? INPUT_ICONS.openedEye
                    : INPUT_ICONS.openedEyeError
                  : isValid
                    ? INPUT_ICONS.closedEye
                    : INPUT_ICONS.closedEyeError
            ) : (disabled ? INPUT_ICONS.arrowDisabled : INPUT_ICONS.arrow)
          }
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
  onClick() {
  },
};
