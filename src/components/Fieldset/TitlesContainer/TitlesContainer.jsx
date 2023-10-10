import React from 'react';
import PropTypes from 'prop-types';
import DropdownItemTitle from '../DropdownItem/DropdownItemTitle/DropdownItemTitle';

export default function TitlesContainer({ value, element, placeholder }) {
  return value.length === 0 ? (
    <p className="placeholder">{placeholder}</p>
  ) : (
    value.map((displayValue) => (
      <li key={displayValue}>
        <DropdownItemTitle item={displayValue} checked element={element} />
      </li>
    ))
  );
}

TitlesContainer.propTypes = {
  element: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

TitlesContainer.defaultProps = {
  placeholder: null,
  value: null,
};
