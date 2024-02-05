import React, { useState } from 'react';
import './DropdownItem.css';
import { func, string, array, objectOf, oneOfType, bool, } from 'prop-types';
import { checkboxType, radioType, titlesDropdownElement } from '../../../../constants/constants';
import DropdownItemIcon from './DropdownItemIcon/DropdownItemIcon';
import DropdownItemTitle from './DropdownItemTitle/DropdownItemTitle';
import DropdownCustomInput from './DropdownCustomInput/DropdownCustomInput';

export default function DropdownItem({
  onChange, item, isIcon,
  type, element,
  name, selectedDropdownItems,
  values, customElement,
  resetCustomValue, setCustomValue,
}) {
  const isTitlesElement = element === titlesDropdownElement;
  const isRadioType = type === radioType;
  const isCheckboxType = type === checkboxType;

  const getContainerClassName = () => {
    if (isRadioType) {
      return ' dropdown-item-container_type_radio';
    }

    if (isCheckboxType) {
      return ' dropdown-item-container_type_checkbox';
    }

    if (isTitlesElement) {
      return ' dropdown-item-container_type_titles';
    }

    return '';
  };

  const getNameForInput = (nameElem, valueElem) => {
    const newName = `${nameElem}_${valueElem}`;

    return newName.replace(/ /g, '_');
  };

  const nameForElem = getNameForInput(name, item);

  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const handleClickCustomInput = () => {
    setIsCustomOpen(!isCustomOpen);

    if (isCustomOpen) {
      resetCustomValue();
    } else {
      setCustomValue();
    }
  };

  const checkIsChecked = () => {
    if (customElement === item) {
      return isCustomOpen;
    }

    if (isRadioType) {
      return selectedDropdownItems[name] === item;
    }

    if (isCheckboxType) {
      return (
        selectedDropdownItems[name]
        && selectedDropdownItems[name].includes(item)
      ) || false;
    }

    return false;
  };

  const isChecked = checkIsChecked();

  const getOnClick = () => (
    customElement === item ? handleClickCustomInput : () => {}
  );

  const onClickForInput = getOnClick();

  return (
    <label className={`dropdown-item-container${getContainerClassName()}`}>
      <DropdownItemIcon
        element={element}
        type={type}
        item={item}
        onChange={onChange}
        checked={isChecked}
        name={nameForElem}
        onClick={onClickForInput}
        isIcon={isIcon}
      />
      <DropdownItemTitle
        checked={isChecked}
        type={type}
        element={element}
        item={item}
        customElement={customElement}
      />
      <DropdownCustomInput
        inputType="text"
        item={item}
        values={values}
        onChange={onChange}
        customElement={customElement}
        isCustomOpen={isCustomOpen}
      />
    </label>
  );
}

DropdownItem.propTypes = {
  element: string.isRequired,
  item: string,
  onChange: func,
  type: string,
  name: string,
  values: objectOf(string),
  selectedDropdownItems: objectOf(
    oneOfType([array, string])
  ),
  customElement: string,
  resetCustomValue: func,
  setCustomValue: func,
  isIcon: bool,
};

DropdownItem.defaultProps = {
  item: null,
  onChange: () => {},
  type: null,
  name: null,
  values: null,
  selectedDropdownItems: {},
  customElement: '',
  resetCustomValue: () => {},
  setCustomValue: () => {},
  isIcon: true,
};
