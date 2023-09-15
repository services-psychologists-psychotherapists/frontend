import './DwopDown.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  radioDropDown
} from '../../../constants/constants';
import RadioDropdown from '../RadioDropdown/RadioDropdown';
import CheckboxDropdown from '../CheckboxDropdown/CheckboxDropdown';

export default function DropDown({
  isFocused,
  selectedValue,
  onChange,
  element,
  selectedCheckBoxValues,
  dropDownContent
}) {
  return (
    dropDownContent.length > 0 && (
      <div className={`dropdown ${isFocused ? 'dropdown_opened' : ''}`}>
        <ul className="dropdown__list">
          {
            dropDownContent.map((item) => (
              <li className="dropdown__item" key={item}>
                {element === radioDropDown ? (
                  <RadioDropdown
                    selectedValue={selectedValue}
                    item={item}
                    onChange={onChange}
                  />
                ) : (
                  <CheckboxDropdown
                    selectedCheckBoxValues={selectedCheckBoxValues}
                    item={item}
                    onChange={onChange}
                  />
                )}
              </li>
            ))
          }
        </ul>
      </div>
    )
  );
}

DropDown.propTypes = {
  element: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  selectedCheckBoxValues: PropTypes.shape({}),
  isFocused: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dropDownContent: PropTypes.array
};

DropDown.defaultProps = {
  selectedValue: '',
  selectedCheckBoxValues: {},
  dropDownContent: []
};
