import './DropdownItemIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxDropDownElement, radioDropDownElement } from '../../../../constants/constants';

export default function DropdownItemIcon({
  type, onChange, selectedValue, item, element, checked
}) {
  const isRadio = element === radioDropDownElement;
  const isCheckbox = element === checkboxDropDownElement;

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
    type && (
      <input
        type={type}
        className={`dropdown-item__icon_${isRadio ? 'radio' : isCheckbox ? 'checkbox' : 'title'}`}
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
