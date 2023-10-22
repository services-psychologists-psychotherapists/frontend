import React from 'react';
import {
  bool, objectOf, string, func, number, oneOfType, arrayOf
} from 'prop-types';
import './FourthStep.css';
import Title from '../../../../components/generic/Title/Title';
import FormClue from '../../FormClue/FormClue';
import {
  PSYCHO_REGISTRATION_FOURTH_STEP,
  PSYCHO_REGISTRATION_FOURTH_STEP_TWO,
  checkboxDropdownElement,
  titlesDropdownElement,
} from '../../../../constants/constants';
import Fieldset from '../../../../components/Fieldset/Fieldset';
import Textarea from '../../../../components/Fieldset/Textarea/Textarea';
import ServiceDocuments from '../../../../components/generic/ServiceDocuments/ServiceDocuments';
import Text from '../../../../components/generic/Text/Text';

export default function FourthStep({
  className,
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  step,
  selectedDropdownItems,
  resetCustomValue,
  setCustomValue,
}) {
  return (
    <div className={className || 'psycho-registration__step_off'}>
      <Title
        text="4/4&nbsp;&nbsp;&nbsp;О работе"
        className="psycho-registration__form-title"
        size="s"
      />
      <div className="psycho-registration__form-container">
        <FormClue />
        <ul className="psycho-registration__form-step_list psycho-registration__form-step_list-two">
          {PSYCHO_REGISTRATION_FOURTH_STEP.map((i) => (
            <li key={i.name}>
              <Fieldset
                name={i.name || null}
                element={i.element || null}
                title={i.title || null}
                typeForInput={i.typeForInput || null}
                required={i.required || false}
                values={values}
                handleChange={(e) => {
                  if (i.element === titlesDropdownElement) {
                    handleChange(e, true);
                  }

                  if (i.element === checkboxDropdownElement) {
                    if (i.customElement) {
                      handleChange(e, true, i.customElement);
                    }
                  }
                }}
                errors={errors}
                // Не сразу срабатывает валидация на радио
                isValid={getInvalidInput(inputValidStatus[i.name])}
                promptClasses={i.promptClasses || ''}
                selectedDropdownItems={selectedDropdownItems || null}
                dropdownContent={i.dropdownContent || []}
                typeForDropdown={i.typeForDropdown}
                disabled={step !== 4}
                inputContainerClasses={i.inputContainerClasses || ''}
                resetCustomValue={resetCustomValue || null}
                setCustomValue={setCustomValue || null}
                customElement={i.customElement || null}
                placeholder={i.placeholder || ''}
                classesForInput={i.classesForInput || ''}
              />
            </li>
          ))}
          <div className="psycho-registration__form-step_list_two">
            {PSYCHO_REGISTRATION_FOURTH_STEP_TWO.map((i) => (
              <li key={i.name}>
                <Fieldset
                  name={i.name || null}
                  element={i.element || null}
                  title={i.title || null}
                  typeForInput={i.typeForInput || null}
                  required={i.required || false}
                  values={values}
                  handleChange={(e) => handleChange(e)}
                  errors={errors}
                  // Не сразу срабатывает валидация на радио
                  isValid={getInvalidInput(inputValidStatus[i.name])}
                  promptClasses={i.promptClasses || ''}
                  selectedDropdownItems={selectedDropdownItems || null}
                  dropdownContent={i.dropdownContent || []}
                  typeForDropdown={i.typeForDropdown}
                  disabled={step !== 4}
                  inputContainerClasses={i.inputContainerClasses || ''}
                  resetCustomValue={resetCustomValue || null}
                  setCustomValue={setCustomValue || null}
                  customElement={i.customElement || null}
                  placeholder={i.placeholder || ''}
                  classesForInput={i.classesForInput || ''}
                  minLength={i.minLength || null}
                  maxLength={i.maxLength || null}
                  autoComplete={i.autoComplete || null}
                />
              </li>
            ))}
          </div>
          <li>
            <Textarea
              title="&nbsp;&nbsp;&nbsp;Расскажите нам о себе в свободной форме"
              placeholder="Например, что считаете нам нужно узнать о вас, чтобы понять, какой вы специалист?"
              onChange={(e) => handleChange(e)}
              name="about"
              id="psycho-registration-about"
              value={values.about}
              textareaClassName="psycho-registration__form-text"
              disabled={step !== 4}
              required
              errors={errors || null}
              minLength="1"
              maxLength="500"
            />
          </li>
        </ul>
        <div>
          <Text
            size="s"
            type="span"
          >
            Нажимая кнопку «Зарегистрироваться», Вы соглашаетесь c
          </Text>
          <ServiceDocuments
            textVariant="whereby"
            className="auth__service-documents_text"
          />
        </div>
      </div>
    </div>
  );
}

FourthStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  className: string,
  step: number.isRequired,
  selectedDropdownItems: objectOf(
    oneOfType([
      string,
      arrayOf(string),
    ])
  ).isRequired,
  resetCustomValue: func,
  setCustomValue: func,
};

FourthStep.defaultProps = {
  className: '',
  resetCustomValue: () => {},
  setCustomValue: () => {},
};
