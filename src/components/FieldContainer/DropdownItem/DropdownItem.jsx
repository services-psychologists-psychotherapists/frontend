import './DropdownItem.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  checkboxDropDown,
  inputElement,
  radioDropDown,
} from '../../../constants/constants';
import Input from '../Input/Input';
import { useForm } from '../../../hooks/useForm';

export default function DropdownItem({
  onChange, selectedValue, item, type
}) {
  const { values, handleChange } = useForm({
    custom: '',
  });

  const isOtherChecked = selectedValue['Другое'] || false;
  const isRadio = type === radioDropDown;
  const isCheckbox = type === checkboxDropDown;
  const isOther = item === 'Другое';

  const containerClassName = isRadio
    ? 'dropdown__radio-label'
    : 'dropdown__checkbox-label';

  const isChecked = isRadio
    ? selectedValue === item
    : selectedValue[item] || false;
  const shouldRenderCustomInput = isOther && isCheckbox;

  return (
    <label className={containerClassName}>
      <input
        type={type}
        className={`dropdown__${isRadio ? 'radio' : 'checkbox'}`}
        value={item}
        checked={isChecked}
        onChange={onChange}
      />
      {shouldRenderCustomInput && (
        <div className="dropdown__checkbox-input">
          <Input
            type="text"
            name="custom"
            className="dropdown__custom-input"
            value={values.custom || ''}
            onChange={handleChange}
            placeholder={!isOtherChecked ? 'Другое' : 'Введите свой вариант'}
            disabled={!isOtherChecked}
            element={inputElement}
          />
        </div>
      )}
      {!isOther && item}
    </label>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
