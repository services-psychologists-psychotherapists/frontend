import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxType, radioType, titlesDropdownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, item,
  element, checked, name,
  onClick,
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
        className={`dropdown-item-icon-${getDropdownItemIconClassName()}`}
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
  element: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  item: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownItemIcon.defaultProps = {
  checked: false,
  item: null,
  onChange: () => {},
  type: null,
  name: null,
  onClick: () => {},
};
