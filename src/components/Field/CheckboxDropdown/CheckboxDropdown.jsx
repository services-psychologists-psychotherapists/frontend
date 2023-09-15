import './CheckboxDropdown.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';

export default function CheckboxDropdown({
  onChange,
  selectedCheckBoxValues,
  item,
}) {
  const { values, handleChange } = useForm({
    custom: '',
  });

  // eslint-disable-next-line react/prop-types
  const isOtherChecked = selectedCheckBoxValues['Другое'] || false;

  return (
    <label className="dropdown__checkbox-label">
      <input
        type="checkbox"
        className="dropdown__checkbox"
        value={item}
        checked={selectedCheckBoxValues[item] || false}
        onChange={onChange}
      />
      {item === 'Другое' && (
        <input
          type="text"
          name="custom"
          className="dropdown__custom-input"
          value={values.custom || ''}
          onChange={handleChange}
          placeholder="Другое"
          disabled={!isOtherChecked}
        />
      )}
      {item === 'Другое' ? '' : item}
    </label>
  );
}

CheckboxDropdown.propTypes = {
  item: PropTypes.string.isRequired,
  selectedCheckBoxValues: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
