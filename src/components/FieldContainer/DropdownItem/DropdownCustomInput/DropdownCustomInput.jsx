import './DropdownCustomInput.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';

export default function DropdownCustomInput({
  item,
  inputType,
  onChange,
  selectedValue,
  value,
  isCheckboxElement,
  name,
}) {
  const isOtherChecked = selectedValue['Другое'] || false;
  const isOther = item === 'Другое';
  const shouldRenderCustomInput = isOther && isCheckboxElement;

  return (
    shouldRenderCustomInput && (
      <div className="dropdown-item__custom-input">
        <Input
          type={inputType}
          name={name}
          className="dropdown-item__input"
          value={value}
          onChange={onChange}
          placeholder={!isOtherChecked ? 'Другое' : 'Введите свой вариант'}
          disabled={!isOtherChecked}
        />
      </div>
    )
  );
}

DropdownCustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
  isCheckboxElement: PropTypes.bool.isRequired,
};
