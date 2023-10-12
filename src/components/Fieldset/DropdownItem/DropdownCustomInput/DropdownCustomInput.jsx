import './DropdownCustomInput.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';
import { checkboxDropDownElement } from '../../../../constants/constants';

export default function DropdownCustomInput({
  item,
  inputType,
  onChange,
  selectedDropdownItems,
  values,
  name,
  element,
}) {
  const isCheckboxElement = element === checkboxDropDownElement;
  const isOtherChecked = ((selectedDropdownItems[name] && selectedDropdownItems[name].includes('Другое')) || false)
    && isCheckboxElement;
  const isOther = item === 'Другое';
  const shouldRenderCustomInput = isOther && isCheckboxElement;

  return (
    shouldRenderCustomInput && (
      <div className="dropdown-item__custom-input">
        <Input
          ownClasses="dropdown-item__input"
          type={inputType}
          name="custom"
          value={values.custom || ''}
          onChange={onChange}
          placeholder={!isOtherChecked ? 'Другое' : 'Введите свой вариант'}
          disabled={!isOtherChecked}
        />
      </div>
    )
  );
}

DropdownCustomInput.propTypes = {
  element: PropTypes.string.isRequired,
  name: PropTypes.string,
  item: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  selectedDropdownItems: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  ),
};

DropdownCustomInput.defaultProps = {
  name: null,
  item: null,
  values: null,
  onChange: () => {},
  inputType: null,
  selectedDropdownItems: {},
};
