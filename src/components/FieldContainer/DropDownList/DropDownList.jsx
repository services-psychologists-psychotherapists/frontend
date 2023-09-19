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
  element
}) {
  if (dropDownContent.length === 0) {
    return null;
  }

  return (
    <ul className={`dropdown-list ${isFocused && 'dropdown-list_opened'} ${element === titlesDropDownElement && 'dropdown-list_titles'}`}>
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
  type: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]).isRequired,
  isFocused: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  dropDownContent: PropTypes.arrayOf(PropTypes.string)
};

DropDownList.defaultProps = {
  dropDownContent: []
};
