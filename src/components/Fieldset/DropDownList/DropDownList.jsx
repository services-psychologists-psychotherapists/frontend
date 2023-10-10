import './DropDownList.css';
import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import { titlesDropDownElement } from '../../../constants/constants';

export default function DropDownList({
  isFocused,
  selectedValue,
  onChange,
  type,
  dropDownContent,
  element,
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
            selectedValue={selectedValue}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
}

DropDownList.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  dropDownContent: PropTypes.arrayOf(PropTypes.string),
};

DropDownList.defaultProps = {
  isFocused: false,
  onChange: () => {},
  type: null,
  dropDownContent: [],
};
