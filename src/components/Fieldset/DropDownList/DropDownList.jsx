import './DropDownList.css';
import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import { titlesDropDownElement } from '../../../constants/constants';

export default function DropDownList({
  isFocused,
  onChange,
  type,
  dropDownContent,
  element,
  name,
  selectedDropdownItems,
  handleChange,
  values,
}) {
  if (dropDownContent.length === 0) {
    return null;
  }

  const dropdownListClasses = `dropdown-list${isFocused ? ' dropdown-list_opened' : ''}${
    element === titlesDropDownElement ? ' dropdown-list_titles' : ''
  }`;

  return (
    <ul className={dropdownListClasses}>
      {dropDownContent.map((item) => (
        <li className="dropdown-list__item" key={item}>
          <DropdownItem
            item={item}
            type={type}
            element={element}
            onChange={onChange}
            name={name}
            selectedDropdownItems={selectedDropdownItems}
            values={values}
            handleChange={handleChange}
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
  dropDownContent: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,

  handleChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
};

DropDownList.defaultProps = {
  isFocused: false,
  onChange: () => {},
  type: null,
  dropDownContent: [],
  name: null,
  values: null,
  handleChange: () => {},
  selectedDropdownItems: {},
};
