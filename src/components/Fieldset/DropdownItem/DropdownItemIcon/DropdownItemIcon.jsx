import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxType, radioType, titlesDropDownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, item, element, checked, name
}) {
  const isTitlesElement = element === titlesDropDownElement;

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

  const dropdownItemIconClassName = getDropdownItemIconClassName();

  return (
    type && (
      // TODO: не инпуты?
      <input
        type={type}
        className={`dropdown-item__icon_${dropdownItemIconClassName}`}
        value={item}
        checked={checked}
        onChange={onChange}
        name={name}
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
};

DropdownItemIcon.defaultProps = {
  checked: false,
  item: null,
  onChange: () => {},
  type: null,
  name: null,
};
