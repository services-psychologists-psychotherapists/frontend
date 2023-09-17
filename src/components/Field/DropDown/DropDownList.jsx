import './DwopDown.css';
import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';

export default function DropDownList({
  isFocused,
  selectedValue,
  onChange,
  element,
  dropDownContent
}) {
  if (dropDownContent.length === 0) {
    return null;
  }

  return (
    <div className={`dropdown ${isFocused ? 'dropdown_opened' : ''}`}>
      <ul className="dropdown__list">
        {dropDownContent.map((item) => (
          <li className="dropdown__item" key={item}>
            <DropdownItem
              element={element}
              selectedValue={selectedValue}
              item={item}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

DropDownList.propTypes = {
  element: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isFocused: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  dropDownContent: PropTypes.arrayOf(PropTypes.string)
};

DropDownList.defaultProps = {
  selectedValue: '',
  dropDownContent: []
};
