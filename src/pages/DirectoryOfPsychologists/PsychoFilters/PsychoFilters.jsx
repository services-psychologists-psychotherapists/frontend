import React from 'react';
import {
  objectOf, func, string, arrayOf, oneOfType
} from 'prop-types';
import './PsychoFilters.css';
import Button from '../../../components/generic/Button/Button';
import Fieldset from '../../../components/generic/Fieldset/Fieldset';
import { PSYCHO_FILTER_DATA } from '../../../constants/constants';

export default function PsychoFilters({
  values, handleChange, errors,
  resetForm, selectedDropdownItems,
  handleFilterSubmit, resetCustomValue,
  setCustomValue,
}) {
  return (
    <div className="psycho-filters-container">
      <form className="psycho-filters">
        <div className="psycho-filters__header">
          <div className="psycho-filters__header-title">
            <div className="psycho-filters__header-icon" />
            <span className="psycho-filters__header-text">Фильтры</span>
          </div>
          <Button
            variant="text"
            className="psycho-filters__header-button"
            onClick={() => resetForm()}
          >
            Сбросить фильтры
          </Button>
        </div>
        <ul className="psycho-filters__filters">
          {PSYCHO_FILTER_DATA.map((i) => (
            <li key={i.name}>
              <Fieldset
                name={i.name}
                element={i.element}
                placeholder={i.placeholder}
                title={i.title}
                dropdownContent={i.dropdownContent}
                typeForDropdown={i.typeForDropdown}
                required={i.required}
                values={values}
                errors={errors}
                inputContainerClasses="psycho-filters__filter"
                promptClasses="psycho-filters__prompt"
                handleChange={(e) => {
                  if (i.customElement) {
                    handleChange(e, true, i.customElement);
                  } else {
                    handleChange(e, true);
                  }
                }}
                selectedDropdownItems={selectedDropdownItems}
                customElement={i.customElement}
                resetCustomValue={resetCustomValue}
                setCustomValue={setCustomValue}
                autoComplete={i.autoComplete}
                readOnly
                classesForInput="psycho-filters__input"
              />
            </li>
          ))}
        </ul>
        <Button
          type="submit"
          variant="text"
          className="psycho-filters__submit-button"
          onClick={() => handleFilterSubmit()}
        >
          Применить фильтры
        </Button>
      </form>
    </div>
  );
}

PsychoFilters.propTypes = {
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  resetForm: func.isRequired,
  selectedDropdownItems: objectOf(
    oneOfType([
      arrayOf(string),
      string,
    ])
  ),
  handleFilterSubmit: func,
  resetCustomValue: func,
  setCustomValue: func,
};

PsychoFilters.defaultProps = {
  handleFilterSubmit: () => {},
  resetCustomValue: () => {},
  setCustomValue: () => {},
  selectedDropdownItems: {},
};
