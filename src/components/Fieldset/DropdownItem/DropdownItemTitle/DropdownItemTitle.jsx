import './DropdownItemTitle.css';
import React from 'react';
import PropTypes from 'prop-types';
import { checkboxDropdownElement, titlesDropdownElement } from '../../../../constants/constants';

export default function DropdownItemTitle({
  item, element, checked, customElement,
}) {
  const isCheckboxElement = element === checkboxDropdownElement;
  const isTitlesElement = element === titlesDropdownElement;

  const isCustom = item === customElement && isCheckboxElement;

  const getTitleStateClassName = () => {
    if (isTitlesElement && checked) {
      return 'dropdown-item__title-titles_checked';
    }
    if (isTitlesElement && !checked) {
      return 'dropdown-item__title-titles';
    }
    return null;
  };

  return !isCustom && <p className={getTitleStateClassName()}>{item}</p>;
}

DropdownItemTitle.propTypes = {
  element: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  item: PropTypes.string,
  customElement: PropTypes.string,
};

DropdownItemTitle.defaultProps = {
  checked: false,
  item: null,
  customElement: '',
};
