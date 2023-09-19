import './DropdownItemTitle.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  checkboxDropDownElement,
  titlesDropDownElement,
} from '../../../../constants/constants';

export default function DropdownItemTitle({ item, element }) {
  const isOther = item === 'Другое' && element === checkboxDropDownElement;

  return (
    !isOther && (
      <p
        className={`dropdown-item__title ${
          element === titlesDropDownElement && 'dropdown-item__title_block'
        }`}
      >
        {item}
      </p>
    )
  );
}

DropdownItemTitle.propTypes = {
  item: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
};
