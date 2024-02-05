import './ListWithDropdown.css';
import React from 'react';
import {
  string, objectOf, arrayOf, func, bool, oneOfType, array,
} from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import { titlesDropdownElement } from '../../../../constants/constants';
import useVerticalScroll from '../../../../hooks/useVerticalScroll';

export default function ListWithDropdown({
  isFocused, onChange, type,
  dropdownContent, element, name,
  selectedDropdownItems, values,
  customElement, resetCustomValue,
  setCustomValue, classesForAbsoluteList,
  isIcon,
}) {
  const scrollOnClick = useVerticalScroll();

  if (dropdownContent.length === 0) {
    return null;
  }

  const dropdownListClasses = `dropdown-list scrollbar${
    isFocused ? ' dropdown-list_type_opened' : ''}${
    element === titlesDropdownElement ? ' dropdown-list_type_title' : ''
  }`;

  return (
    <ul
      className={`${dropdownListClasses}${classesForAbsoluteList
        ? ` ${classesForAbsoluteList}` : ''}`}
      {...scrollOnClick}
    >
      {dropdownContent.map((item) => (
        <li key={item}>
          <DropdownItem
            item={item}
            type={type}
            element={element}
            onChange={onChange}
            name={name}
            selectedDropdownItems={selectedDropdownItems}
            values={values}
            customElement={customElement}
            resetCustomValue={resetCustomValue}
            setCustomValue={setCustomValue}
            isIcon={isIcon}
          />
        </li>
      ))}
    </ul>
  );
}

ListWithDropdown.propTypes = {
  element: string.isRequired,
  type: string,
  isFocused: bool,
  onChange: func,
  dropdownContent: arrayOf(string),
  name: string,
  values: objectOf(string),
  selectedDropdownItems: objectOf(
    oneOfType([array, string])
  ),
  customElement: string,
  resetCustomValue: func,
  setCustomValue: func,
  classesForAbsoluteList: string,
  isIcon: bool,
};

ListWithDropdown.defaultProps = {
  isFocused: false,
  onChange: () => {},
  type: null,
  dropdownContent: [],
  name: null,
  values: null,
  selectedDropdownItems: {},
  customElement: '',
  resetCustomValue: () => {},
  setCustomValue: () => {},
  classesForAbsoluteList: '',
  isIcon: true,
};
