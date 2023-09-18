import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { radioDropDownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, selectedValue, item, element
}) {
  const isRadio = element === radioDropDownElement;

  const isChecked = isRadio
    ? selectedValue === item
    : selectedValue[item] || false;

  const handleInputChange = (e) => {
    const newValue = isRadio
      ? e.target.value
      : {
        ...selectedValue,
        [item]: e.target.checked,
      };
    onChange({ value: newValue, type });
  };

  return (
    <input
      type={type}
      className={`dropdown-item__icon_${isRadio ? 'radio' : 'checkbox'}`}
      value={item}
      checked={isChecked}
      onChange={handleInputChange}
    />
  );
}

DropdownItemIcon.propTypes = {
  element: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
