import './DropdownItemTitle.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownItemTitle({ item }) {
  const isOther = item === 'Другое';

  return !isOther && <p className="dropdown-item__title">{item}</p>;
}

DropdownItemTitle.propTypes = {
  item: PropTypes.string.isRequired,
};
