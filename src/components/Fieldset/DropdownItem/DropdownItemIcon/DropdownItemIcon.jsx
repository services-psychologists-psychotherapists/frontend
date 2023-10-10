import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxType, radioType, titlesDropDownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type,
  onChange,
  selectedValue,
  item,
  element,
  checked,
}) {
  const isTitlesElement = element === titlesDropDownElement;

  const isRadioType = type === radioType;
  const isCheckboxType = type === checkboxType;

  const handleInputChange = (e) => {
    const newValue = isRadioType
      ? e.target.value
      : {
        ...selectedValue,
        [item]: e.target.checked,
      };
    onChange({ value: newValue, type });
  };

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
      <input
        type={type}
        className={`dropdown-item__icon_${dropdownItemIconClassName}`}
        value={item}
        checked={checked}
        onChange={handleInputChange}
      />
    )
  );
}

DropdownItemIcon.propTypes = {
  element: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  item: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  type: PropTypes.string,
};

DropdownItemIcon.defaultProps = {
  checked: false,
  item: null,
  selectedValue: null,
  onChange: () => {},
  type: null,
};
