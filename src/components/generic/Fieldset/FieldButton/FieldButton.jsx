import React, { useRef } from 'react';
import './FieldButton.css';
import { string, bool, func } from 'prop-types';
import {
  checkboxDropdownElement,
  radioDropdownElement,
  titlesDropdownElement,
} from '../../../../constants/constants';
import FieldButtonImage from './FieldButtonImage/FieldButtonImage';
import useOutsideClick from '../../../../hooks/useOnClickOutside';

export default function FieldButton({
  element, disabled,
  inputType, onClick,
  isEyeOpened, isValid,
  setIsFocused, isChangeFocus,
  isFocused,
}) {
  const isRadioElement = element === radioDropdownElement;
  const isCheckboxElement = element === checkboxDropdownElement;
  const isTitlesElement = element === titlesDropdownElement;
  const isInputPasswordType = inputType === 'password';
  const isHaveIcon = isInputPasswordType || isRadioElement || isCheckboxElement || isTitlesElement;
  const isDropdownElement = isRadioElement || isCheckboxElement || isTitlesElement
    ? ' field-button_type_dropdown' : '';
  const btnRef = useRef(null);

  useOutsideClick(btnRef, () => {
    if (isChangeFocus) {
      setTimeout(() => {
        setIsFocused(false);
      }, 100);
    }
  });

  return (
    isHaveIcon && (
      <button
        ref={btnRef}
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
          isFocused={isFocused}
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
  setIsFocused: func,
  isChangeFocus: bool,
  isFocused: bool,
};

FieldButton.defaultProps = {
  isEyeOpened: false,
  inputType: null,
  disabled: false,
  isValid: true,
  onClick: () => {},
  setIsFocused: () => {},
  isChangeFocus: false,
  isFocused: false,
};
