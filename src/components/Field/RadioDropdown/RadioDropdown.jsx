import './RadioDropdown.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function RadioDropdown({ onChange, selectedValue, item }) {
  return (
    <label className="dropdown__radio-label">
      <input
        type="radio"
        className="dropdown__radio"
        value={item}
        checked={selectedValue === item}
        onChange={onChange}
      />
      {item}
    </label>
  );
}

RadioDropdown.propTypes = {
  item: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
