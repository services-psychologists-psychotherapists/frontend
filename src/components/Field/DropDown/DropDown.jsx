import './DwopDown.css';
import React from 'react';
import PropTypes from 'prop-types';
import { radioDropDown } from '../../../constants/constants';

export default function DropDown({
  isFocused,
  selectedValue,
  onChange,
  element,
}) {
  return (
    <div className={`dropdown ${isFocused ? 'dropdown_opened' : ''}`}>
      {element === radioDropDown && (
        <ul className="dropdown__list">
          <li className="dropdown__item">
            <label className="dropdown__radio-label">
              <input
                type="radio"
                className="dropdown__radio"
                value="женский"
                checked={selectedValue === 'женский'}
                onChange={onChange}
              />
              женский
            </label>
          </li>
          <li className="dropdown__item">
            <label className="dropdown__radio-label">
              <input
                type="radio"
                className="dropdown__radio"
                value="мужской"
                checked={selectedValue === 'мужской'}
                onChange={onChange}
              />
              мужской
            </label>
          </li>
          <li className="dropdown__item">
            <label className="dropdown__radio-label">
              <input
                type="radio"
                className="dropdown__radio"
                value="другое"
                checked={selectedValue === 'другое'}
                onChange={onChange}
              />
              другое
            </label>
          </li>
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
