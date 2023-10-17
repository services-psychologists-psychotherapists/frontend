import './DropDownList.css';
import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import { titlesDropdownElement } from '../../../constants/constants';

export default function DropDownList({
  isFocused,
  onChange,
  type,
  dropdownContent,
  element,
  name,
  selectedDropdownItems,
  values,
  customElement,
  resetCustomValue,
  setCustomValue,
}) {
  if (dropdownContent.length === 0) {
    return null;
  }

  const dropdownListClasses = `dropdown-list${isFocused ? ' dropdown-list_opened' : ''}${
    element === titlesDropdownElement ? ' dropdown-list_titles' : ''
  }`;

  return (
    <ul className={dropdownListClasses}>
      {dropdownContent.map((item) => (
        <li className="dropdown-list__item" key={item}>
          <DropdownItem
            item={item}
            type={type}
            element={element}
            onChange={onChange}
            name={name}
            selectedDropdownItems={selectedDropdownItems}
            values={values}
            customElement={customElement}
            resetCustomValue={resetCustomValue}
            setCustomValue={setCustomValue}
          />
        </li>
      ))}
    </ul>
  );
}

DropDownList.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  dropdownContent: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
  customElement: PropTypes.string,
  resetCustomValue: PropTypes.func,
  setCustomValue: PropTypes.func,
};

DropDownList.defaultProps = {
  isFocused: false,
  onChange: () => {},
  type: null,
  dropdownContent: [],
  name: null,
  values: null,
  selectedDropdownItems: {},
  customElement: '',
  resetCustomValue: () => {},
  setCustomValue: () => {},
};
