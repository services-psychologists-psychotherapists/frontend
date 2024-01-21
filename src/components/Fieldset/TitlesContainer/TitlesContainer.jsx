import React from 'react';
import { string, oneOfType, arrayOf } from 'prop-types';
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
  element: string.isRequired,
  placeholder: string,
  value: oneOfType([string, arrayOf(string)]),
};

TitlesContainer.defaultProps = {
  placeholder: null,
  value: null,
};
