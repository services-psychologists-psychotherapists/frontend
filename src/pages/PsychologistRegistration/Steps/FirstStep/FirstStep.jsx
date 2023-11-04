import React from 'react';
import {
  bool, objectOf, string, func, oneOfType, arrayOf, number
} from 'prop-types';
import './FirsStep.css';
import Title from '../../../../components/generic/Title/Title';
import FormClue from '../../FormClue/FormClue';
import Fieldset from '../../../../components/Fieldset/Fieldset';
import {
  radioDropdownElement, PSYCHO_REGISTRATION_FIRST_STEP
} from '../../../../constants/constants';

export default function FirstStep({
  className,
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  selectedDropdownItems,
  step,
}) {
  return (
    <div className={`${className || 'psycho-registration__step_off'}    psycho-registration__form-step_one`}>
      <Title
        text="1/4&nbsp;&nbsp;&nbsp;Основная информация"
        className="psycho-registration__form-title"
        size="s"
      />
      <div className="psycho-registration__form-container">
        <FormClue />
        <ul className="psycho-registration__form-step_list psycho-registration__form-step_list-one">
          {PSYCHO_REGISTRATION_FIRST_STEP.map((i) => (
            <li key={i.name}>
              <Fieldset
                name={i.name || null}
                element={i.element || null}
                title={i.title || null}
                typeForInput={i.typeForInput || null}
                required={i.required || false}
                values={values}
                handleChange={(e) => {
                  if (i.element === radioDropdownElement) {
                    handleChange(e, true);
                  } else {
                    handleChange(e);
                  }
                }}
                errors={errors}
                // Не сразу срабатывает валидация на радио
                isValid={getInvalidInput(inputValidStatus[i.name])}
                promptClasses={i.promptClasses || ''}
                selectedDropdownItems={selectedDropdownItems || null}
                dropdownContent={i.dropdownContent || []}
                typeForDropdown={i.typeForDropdown}
                classesForAbsoluteList="psycho-registration__form_list"
                disabled={step !== 1}
                minLength={i.minLength || null}
                maxLength={i.maxLength || null}
                autoComplete={i.autoComplete || null}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

FirstStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  className: string,
  selectedDropdownItems: objectOf(
    oneOfType([
      string,
      arrayOf(string),
    ])
  ).isRequired,
  step: number.isRequired,
};

FirstStep.defaultProps = {
  className: '',
};
