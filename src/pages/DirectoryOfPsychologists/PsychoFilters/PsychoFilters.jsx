import React from 'react';
import './PsychoFilters.css';
import Button from '../../../components/generic/Button/Button';
import Fieldset from '../../../components/Fieldset/Fieldset';
import { PSYCHO_FILTER_DATA } from '../../../constants/constants';
import { useForm } from '../../../hooks/useForm';

export default function PsychoFilters() {
  const { values, handleChange, errors, resetForm, selectedDropdownItems } = useForm(true);

  const handleSubmit = () => {
    console.log({
      selectedDropdownItems,
    });
  };

  // TODO: У инпутов некорректные названия классов необходимо переделать
  return (
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
              dropDownContent={i.dropDownContent}
              typeForDropDown={i.typeForDropDown}
              required={i.required}
              values={values}
              errors={errors}
              inputContainerClasses="psycho-filters__filter"
              promptClasses="psycho-filters__prompt"
              handleChange={handleChange}
              selectedDropdownItems={selectedDropdownItems}
            />
          </li>
        ))}
      </ul>
      <Button
        type="submit"
        variant="text"
        className="psycho-filters__submit-button"
        onClick={() => handleSubmit()}
      >
        Применить фильтры
      </Button>
    </form>
  );
}
