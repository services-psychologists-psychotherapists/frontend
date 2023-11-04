import './DropdownCustomInput.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';

export default function DropdownCustomInput({
  item,
  inputType,
  onChange,
  values,
  customElement,
  isCustomOpen,
}) {
  return (
    (customElement === item) && (
      <div className="dropdown-item__custom-input">
        <Input
          ownClasses="dropdown-item__input dropdown-item__other"
          type={inputType}
          name="custom"
          value={values.custom || ''}
          onChange={onChange}
          placeholder={!isCustomOpen ? customElement : 'Введите свой вариант'}
          disabled={!isCustomOpen}
        />
      </div>
    )
  );
}

DropdownCustomInput.propTypes = {
  item: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  customElement: PropTypes.string,
  isCustomOpen: PropTypes.bool,
};

DropdownCustomInput.defaultProps = {
  item: null,
  values: null,
  onChange: () => {},
  inputType: null,
  customElement: '',
  isCustomOpen: false,
};
