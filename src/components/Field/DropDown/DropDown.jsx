import './DwopDown.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function DropDown({
  isDropDownOpened,
  selectedValue,
  onChange,
}) {
  return (
    <div className={`dropdown ${isDropDownOpened ? 'dropdown_opened' : ''}`}>
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
    </div>
  );
}

DropDown.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  isDropDownOpened: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
