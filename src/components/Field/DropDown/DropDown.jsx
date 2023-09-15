import './DwopDown.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { checkboxDropDown, dropDownLists, radioDropDown } from '../../../constants/constants';
import RadioDropdown from '../RadioDropdown/RadioDropdown';
import CheckboxDropdown from '../CheckboxDropdown/CheckboxDropdown';

export default function DropDown({
  isFocused,
  selectedValue,
  onChange,
  element,
  selectedCheckBoxValues
}) {
  const [dropDownListRadio] = useState(dropDownLists.genderList);
  const [dropDownListCheckbox] = useState(dropDownLists.approachList);

  return (
    <div className={`dropdown ${isFocused ? 'dropdown_opened' : ''}`}>
      <ul className="dropdown__list">
        {element === radioDropDown
          && dropDownListRadio.map((item) => (
            <li className="dropdown__item" key={item}>
              <RadioDropdown
                selectedValue={selectedValue}
                item={item}
                onChange={onChange}
              />
            </li>
          ))}
        {element === checkboxDropDown
          && dropDownListCheckbox.map((item) => (
            <li className="dropdown__item" key={item}>
              <CheckboxDropdown
                selectedCheckBoxValues={selectedCheckBoxValues}
                item={item}
                onChange={onChange}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

DropDown.propTypes = {
  element: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  selectedCheckBoxValues: PropTypes.shape({}),
  isFocused: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

DropDown.defaultProps = {
  selectedValue: '',
  selectedCheckBoxValues: {}
};
