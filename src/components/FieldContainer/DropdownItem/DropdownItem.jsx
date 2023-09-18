import React from 'react';
import './DropdownItem.css';
import PropTypes from 'prop-types';
import {
  checkboxDropDownElement,
  radioDropDownElement,
} from '../../../constants/constants';
import { useForm } from '../../../hooks/useForm';
import DropdownItemIcon from './DropdownItemIcon/DropdownItemIcon';
import DropdownItemTitle from './DropdownItemTitle/DropdownItemTitle';
import DropdownCustomInput from './DropdownCustomInput/DropdownCustomInput';

export default function DropdownItem({
  onChange,
  selectedValue,
  item,
  type,
  element
}) {
  const { values, handleChange } = useForm({
    custom: '',
  });

  const isCheckboxElement = element === checkboxDropDownElement;
  const isRadioElement = element === radioDropDownElement;
  const containerClassName = isRadioElement
    ? 'dropdown-item__container_radio'
    : 'dropdown-item__container_checkbox';

  return (
    <label
      className={`dropdown-item__container ${containerClassName}`}
    >
      <DropdownItemIcon
        element={element}
        type={type}
        item={item}
        onChange={onChange}
        selectedValue={selectedValue}
      />
      <DropdownCustomInput
        inputType="text"
        isCheckboxElement={isCheckboxElement}
        name="custom"
        item={item}
        value={values.custom || ''}
        onChange={handleChange}
        selectedValue={selectedValue}
      />
      <DropdownItemTitle
        item={item}
      />
    </label>
  );
}

DropdownItem.propTypes = {
  element: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
