import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxDropDownElement, radioDropDownElement, titlesDropDownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, selectedValue, item, element, checked
}) {
  const isRadioElement = element === radioDropDownElement;
  const isCheckboxElement = element === checkboxDropDownElement;
  const isTitlesElement = element === titlesDropDownElement;

  const handleInputChange = (e) => {
    const newValue = isRadioElement
      ? e.target.value
      : {
        ...selectedValue,
        [item]: e.target.checked,
      };
    onChange({ value: newValue, type });
  };

  const getDropdownItemIconClassName = () => {
    if (isRadioElement) {
      return 'radio';
    }
    if (isCheckboxElement) {
      return 'checkbox';
    }
    if (isTitlesElement) {
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
  checked: PropTypes.bool.isRequired,
  element: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
