import React from 'react';
import './DropdownItem.css';
import PropTypes from 'prop-types';
import { checkboxType, radioType, titlesDropDownElement } from '../../../constants/constants';
import { useForm } from '../../../hooks/useForm';
import DropdownItemIcon from './DropdownItemIcon/DropdownItemIcon';
import DropdownItemTitle from './DropdownItemTitle/DropdownItemTitle';
import DropdownCustomInput from './DropdownCustomInput/DropdownCustomInput';

export default function DropdownItem({
  onChange, selectedValue, item, type, element
}) {
  const { values, handleChange } = useForm({
    custom: '',
  });

  const isTitlesElement = element === titlesDropDownElement;

  const isRadioType = type === radioType;
  const isCheckboxType = type === checkboxType;

  const getContainerClassName = () => {
    if (isRadioType) {
      return ' dropdown-item__container_radio';
    }
    if (isCheckboxType) {
      return ' dropdown-item__container_checkbox';
    }
    if (isTitlesElement) {
      return ' dropdown-item__container_titles';
    }
    return '';
  };

  const containerClassName = getContainerClassName();

  const checkIsChecked = () => {
    if (isRadioType) {
      return selectedValue === item;
    }
    if (isCheckboxType) {
      return selectedValue[item] || false;
    }
    return false;
  };

  const isChecked = checkIsChecked();

  return (
    <label className={`dropdown-item__container${containerClassName}`}>
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
        type={type}
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
  item: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  type: PropTypes.string,
};

DropdownItem.defaultProps = {
  item: null,
  selectedValue: null,
  onChange: () => {},
  type: null,
};
