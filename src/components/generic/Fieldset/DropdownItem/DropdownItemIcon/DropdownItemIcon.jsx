import './DropdownItemIcon.css';
import React from 'react';
import { bool, string, func } from 'prop-types';
import { checkboxType, radioType, titlesDropdownElement } from '../../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, item,
  element, checked, name,
  onClick, isIcon,
}) {
  const isTitlesElement = element === titlesDropdownElement;
  const isRadioType = type === radioType;
  const isCheckboxType = type === checkboxType;

  const getDropdownItemIconClassName = () => {
    if (isRadioType && isTitlesElement) {
      return 'title';
    }
    if (isRadioType) {
      return 'radio';
    }
    if (isCheckboxType && !isTitlesElement) {
      return 'checkbox';
    }
    if (isCheckboxType && isTitlesElement) {
      return 'title';
    }
    return '';
  };

  return (
    type && (
      <input
        type={type}
        className={`dropdown-item-icon-${
          getDropdownItemIconClassName()}${
          !isIcon ? ' dropdown-item-icon_hidden' : ''}`}
        value={item}
        checked={checked}
        onChange={onChange}
        name={name}
        onClick={() => onClick()}
        autoComplete="off"
        readOnly
      />
    )
  );
}

DropdownItemIcon.propTypes = {
  element: string.isRequired,
  checked: bool,
  item: string,
  onChange: func,
  type: string,
  name: string,
  onClick: func,
  isIcon: bool,
};

DropdownItemIcon.defaultProps = {
  checked: false,
  item: null,
  onChange: () => {},
  type: null,
  name: null,
  onClick: () => {},
  isIcon: true,
};
