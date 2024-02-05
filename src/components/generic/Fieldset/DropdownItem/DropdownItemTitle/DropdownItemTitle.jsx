import './DropdownItemTitle.css';
import React from 'react';
import { string, bool } from 'prop-types';
import { checkboxDropdownElement, titlesDropdownElement } from '../../../../../constants/constants';

export default function DropdownItemTitle({
  item, element, checked, customElement,
}) {
  const isCheckboxElement = element === checkboxDropdownElement;
  const isTitlesElement = element === titlesDropdownElement;

  const isCustom = item === customElement && isCheckboxElement;

  const getTitleStateClassName = () => {
    if (isTitlesElement && checked) {
      return 'dropdown-item-title_type_checked';
    }
    if (isTitlesElement && !checked) {
      return 'dropdown-item-title';
    }
    return null;
  };

  return !isCustom && <p className={getTitleStateClassName()}>{item}</p>;
}

DropdownItemTitle.propTypes = {
  element: string.isRequired,
  checked: bool,
  item: string,
  customElement: string,
};

DropdownItemTitle.defaultProps = {
  checked: false,
  item: null,
  customElement: '',
};
