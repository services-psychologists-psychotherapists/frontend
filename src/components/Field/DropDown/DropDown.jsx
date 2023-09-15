import './DwopDown.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { dropDownLists, radioDropDown } from '../../../constants/constants';
import RadioDropdown from '../RadioDropdown/RadioDropdown';

export default function DropDown({
  isFocused,
  selectedValue,
  onChange,
  element,
}) {
  const [dropDownList] = useState(dropDownLists.genderList);

  return (
    <div className={`dropdown ${isFocused ? 'dropdown_opened' : ''}`}>
      {element === radioDropDown && (
        <ul className="dropdown__list">
          {dropDownList.map((item) => (
            <li className="dropdown__item" key={item}>
              {element === radioDropDown && (
                <RadioDropdown
                  selectedValue={selectedValue}
                  item={item}
                  onChange={onChange}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropDown.propTypes = {
  element: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
