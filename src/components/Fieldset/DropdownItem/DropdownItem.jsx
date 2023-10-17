import React from 'react';
import './DropdownItem.css';
import PropTypes from 'prop-types';
import { checkboxType, radioType, titlesDropDownElement } from '../../../constants/constants';
import DropdownItemIcon from './DropdownItemIcon/DropdownItemIcon';
import DropdownItemTitle from './DropdownItemTitle/DropdownItemTitle';
import DropdownCustomInput from './DropdownCustomInput/DropdownCustomInput';

export default function DropdownItem({
  onChange,
  item,
  type,
  element,
  name,
  selectedDropdownItems,
  values,
  handleChange,
}) {
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
      return selectedDropdownItems[name] === item;
    }

    if (isCheckboxType) {
      return (selectedDropdownItems[name] && selectedDropdownItems[name].includes(item)) || false;
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
        name={name}
      />
      <DropdownItemTitle checked={isChecked} type={type} element={element} item={item} />
      <DropdownItemTitle checked={isChecked} type={type} element={element} item={item} />
      <DropdownCustomInput
        inputType="text"
        element={element}
        name={name}
        item={item}
        values={values}
        onChange={handleChange}
        selectedDropdownItems={selectedDropdownItems}
      />
    </label>
  );
}

DropdownItem.propTypes = {
  element: PropTypes.string.isRequired,
  item: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
};

DropdownItem.defaultProps = {
  item: null,
  onChange: () => {},
  type: null,
  name: null,
  values: null,
  handleChange: () => {},
  selectedDropdownItems: {},
};
