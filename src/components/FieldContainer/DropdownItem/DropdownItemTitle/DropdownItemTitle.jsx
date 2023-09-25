import './DropdownItemTitle.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  checkboxDropDownElement,
  titlesDropDownElement,
} from '../../../../constants/constants';

export default function DropdownItemTitle({ item, element, checked }) {
  const isCheckboxElement = element === checkboxDropDownElement;
  const isTitlesElement = element === titlesDropDownElement;

  const isOther = item === 'Другое' && isCheckboxElement;

  const geTitleStateClassName = () => {
    if (isTitlesElement && checked) {
      return ' dropdown-item__title-titles_checked';
    }
    if (isTitlesElement && !checked) {
      return ' dropdown-item__title-titles';
    }
    return '';
  };

  const dropdownItemTitleClasses = geTitleStateClassName();

  return (
    !isOther && (
      <p
        className={dropdownItemTitleClasses}
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
