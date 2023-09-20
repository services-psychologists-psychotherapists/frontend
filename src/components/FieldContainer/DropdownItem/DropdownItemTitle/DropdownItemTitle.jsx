import './DropdownItemTitle.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  checkboxDropDownElement,
  titlesDropDownElement,
} from '../../../../constants/constants';

export default function DropdownItemTitle({ item, element, checked }) {
  const isOther = item === 'Другое' && element === checkboxDropDownElement;

  return (
    !isOther && (
      <p
        className={`dropdown-item__title ${
          element === titlesDropDownElement
          && `${checked ? 'dropdown-item__title-titles_checked' : 'dropdown-item__title-titles'}`
        }`}
      >
        {item}
      </p>
    )
  );
}

DropdownItemTitle.propTypes = {
  checked: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
};
