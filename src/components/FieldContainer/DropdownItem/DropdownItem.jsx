import React from 'react';
import './DropdownItem.css';
import PropTypes from 'prop-types';
import {
  checkboxDropDownElement,
  radioDropDownElement, titlesDropDownElement,
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

  const isRadioElement = element === radioDropDownElement;
  const isCheckboxElement = element === checkboxDropDownElement;
  const isTitlesElement = element === titlesDropDownElement;

  const getContainerClassName = () => {
    if (isRadioElement) {
      return ' dropdown-item__container_radio';
    }
    if (isCheckboxElement) {
      return ' dropdown-item__container_checkbox';
    }
    if (isTitlesElement) {
      return ' dropdown-item__container_titles';
    }
    return '';
  };

  const containerClassName = getContainerClassName();

  const checkIsChecked = () => {
    if (isRadioElement) {
      return selectedValue === item;
    }
    if (isCheckboxElement || isTitlesElement) {
      return selectedValue[item] || false;
    }
    return false;
  };

  const isChecked = checkIsChecked();

  return (
    <label
      className={`dropdown-item__container${containerClassName}`}
    >
      <DropdownItemIcon
        element={element}
        type={type}
        item={item}
        onChange={onChange}
        checked={isChecked}
        selectedValue={selectedValue}
      />
      <DropdownItemTitle
        checked={isChecked}
        element={element}
        item={item}
        selectedValue={selectedValue}
      />
      <DropdownCustomInput
        inputType="text"
        element={element}
        name="custom"
        item={item}
        value={values.custom || ''}
        onChange={handleChange}
        selectedValue={selectedValue}
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
