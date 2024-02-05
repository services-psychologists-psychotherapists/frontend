import './DropdownCustomInput.css';
import React from 'react';
import { bool, string, func, objectOf } from 'prop-types';
import Input from '../../Input/Input';

export default function DropdownCustomInput({
  item, inputType,
  onChange, values,
  customElement, isCustomOpen,
}) {
  return (
    (customElement === item) && (
      <div className="dropdown-item-custom">
        <Input
          ownClasses="dropdown-item-custom__input"
          type={inputType}
          name="custom"
          value={values.custom || ''}
          onChange={onChange}
          placeholder={!isCustomOpen ? customElement : 'Введите свой вариант'}
          disabled={!isCustomOpen}
          maxLength="20"
        />
      </div>
    )
  );
}

DropdownCustomInput.propTypes = {
  item: string,
  values: objectOf(string),
  onChange: func,
  inputType: string,
  customElement: string,
  isCustomOpen: bool,
};

DropdownCustomInput.defaultProps = {
  item: null,
  values: null,
  onChange: () => {},
  inputType: null,
  customElement: '',
  isCustomOpen: false,
};
