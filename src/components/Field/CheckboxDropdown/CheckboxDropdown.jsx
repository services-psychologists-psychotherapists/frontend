import './CheckboxDropdown.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxDropdown({
  onChange,
  selectedCheckBoxValues,
  item,
}) {
  return (
    <label className="dropdown__checkbox-label">
      <input
        type="checkbox"
        className="dropdown__checkbox"
        value={item}
        checked={selectedCheckBoxValues[item] || false}
        onChange={onChange}
      />
      {item}
    </label>
  );
}

CheckboxDropdown.propTypes = {
  item: PropTypes.string.isRequired,
  selectedCheckBoxValues: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
