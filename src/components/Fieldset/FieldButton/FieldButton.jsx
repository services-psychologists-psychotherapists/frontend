import './FieldButton.css';
import PropTypes from 'prop-types';
import React from 'react';
import {
  checkboxDropdownElement,
  radioDropdownElement,
  titlesDropdownElement,
} from '../../../constants/constants';
import FieldButtonImage from './FieldButtonImage/FieldButtonImage';

export default function FieldButton({
  element,
  disabled,
  inputType,
  onClick,
  isEyeOpened,
  isValid,
  isFocused,
}) {
  const isRadioElement = element === radioDropdownElement;
  const isCheckboxElement = element === checkboxDropdownElement;
  const isTitlesElement = element === titlesDropdownElement;
  const isInputPasswordType = inputType === 'password';

  const iconClasses = `field-button${isFocused && !isInputPasswordType ? ' rotate' : ''}`;

  const isHaveIcon = isInputPasswordType || isRadioElement || isCheckboxElement || isTitlesElement;

  return (
    isHaveIcon && (
      <button className={iconClasses} onClick={onClick} disabled={disabled} type="button">
        <FieldButtonImage
          inputType={inputType}
          isValid={isValid}
          disabled={disabled}
          element={element}
          isEyeOpened={isEyeOpened}
        />
      </button>
    )
  );
}

FieldButton.propTypes = {
  element: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  onClick: PropTypes.func,
  isEyeOpened: PropTypes.bool,
};

FieldButton.defaultProps = {
  isEyeOpened: false,
  isFocused: false,
  inputType: null,
  disabled: false,
  isValid: true,
  onClick: () => {},
};
