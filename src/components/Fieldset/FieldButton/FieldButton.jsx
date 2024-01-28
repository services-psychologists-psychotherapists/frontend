import './FieldButton.css';
import { string, bool, func } from 'prop-types';
import React from 'react';
import {
  checkboxDropdownElement,
  radioDropdownElement,
  titlesDropdownElement,
} from '../../../constants/constants';
import FieldButtonImage from './FieldButtonImage/FieldButtonImage';

export default function FieldButton({
  element, disabled,
  inputType, onClick,
  isEyeOpened, isValid,
}) {
  const isRadioElement = element === radioDropdownElement;
  const isCheckboxElement = element === checkboxDropdownElement;
  const isTitlesElement = element === titlesDropdownElement;
  const isInputPasswordType = inputType === 'password';
  const isHaveIcon = isInputPasswordType || isRadioElement || isCheckboxElement || isTitlesElement;
  const isDropdownElement = isRadioElement || isCheckboxElement || isTitlesElement
    ? ' field-button_type_dropdown' : '';

  return (
    isHaveIcon && (
      <button
        className={`field-button${isDropdownElement}`}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
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
  element: string.isRequired,
  inputType: string,
  disabled: bool,
  isValid: bool,
  onClick: func,
  isEyeOpened: bool,
};

FieldButton.defaultProps = {
  isEyeOpened: false,
  inputType: null,
  disabled: false,
  isValid: true,
  onClick: () => {},
};
