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

  let iconClasses = 'field-button';
  if (isFocused && type !== 'password') {
    iconClasses += ' rotate';
  }

  const isHaveIcon = type === 'password'
      || element === radioDropDownElement
      || element === checkboxDropDownElement
      || element === titlesDropDownElement;

  return (
    isHaveIcon && (
      <div
        className={iconClasses}
        onClick={element === inputElement && type === 'password' ? showPasswordContent : onClick}
        disabled={disabled}
        /* Поясняю нижние два тега: Если диву ставить onClick, он ругается.
        Решения два: див поменять на button, или применить нижеуказанные теги.
        Так как этот блок лежит в Field, который тоже является button,
        пришлось использовать второй вариант. Если что-то придумаете будет супер) */
        role="presentation"
        onKeyDown={element === inputElement && type === 'password' ? showPasswordContent : onClick}
      >
        <FieldButtonImage
          type={type}
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
  type: PropTypes.string.isRequired,
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
