import './ListWithDropdown.css';
import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import { titlesDropdownElement } from '../../../constants/constants';

export default function ListWithDropdown({
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
  classesForAbsoluteList,
}) {
  if (dropdownContent.length === 0) {
    return null;
  }

  const dropdownListClasses = `dropdown-list${isFocused ? ' dropdown-list_opened' : ''}${
    element === titlesDropdownElement ? ' dropdown-list_titles' : ''
  }`;

  return (
    <ul className={`${dropdownListClasses}${classesForAbsoluteList ? ` ${classesForAbsoluteList}` : ''}`}>
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

ListWithDropdown.propTypes = {
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
  classesForAbsoluteList: PropTypes.string,
};

ListWithDropdown.defaultProps = {
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
  classesForAbsoluteList: '',
};
