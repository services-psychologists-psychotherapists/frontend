/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  bool, objectOf, string, func, oneOfType, arrayOf, number, object
} from 'prop-types';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import moment from 'moment';
import './FirsStep.css';
import Title from '../../../../components/generic/Title/Title';
import FormClue from '../../FormClue/FormClue';
import Fieldset from '../../../../components/Fieldset/Fieldset';
import {
  radioDropdownElement, PSYCHO_REGISTRATION_FIRST_STEP
} from '../../../../constants/constants';
import { removeProperty, updateData } from '../../../../utils/helpers';

export default function FirstStep({
  className,
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  selectedDropdownItems,
  step,
  setDataForRequest,
  dataForRequest,
}) {
  useEffect(() => {
    const firstName = values.first_name;

    if (firstName) {
      updateData('first_name', firstName, setDataForRequest);
    } else {
      removeProperty('first_name', setDataForRequest, dataForRequest);
    }
  }, [values.first_name]);

  useEffect(() => {
    const lastName = values.last_name;

    if (lastName) {
      updateData('last_name', lastName, setDataForRequest);
    } else {
      removeProperty('last_name', setDataForRequest, dataForRequest);
    }
  }, [values.last_name]);

  useEffect(() => {
    const userEmail = values.email;
    const isEmail = /@/.test(userEmail);

    if (userEmail && isEmail) {
      updateData('email', userEmail, setDataForRequest);
    } else {
      removeProperty('email', setDataForRequest, dataForRequest);
    }
  }, [values.email]);

  useEffect(() => {
    const phoneString = values.phone_number;
    const validPhoneNumber = phoneString && parsePhoneNumberFromString(phoneString);

    if (validPhoneNumber) {
      updateData('phone_number', validPhoneNumber.number, setDataForRequest);
    } else {
      removeProperty('phone_number', setDataForRequest, dataForRequest);
    }
  }, [values.phone_number]);

  useEffect(() => {
    const userBirthday = values.birthday;

    if (userBirthday) {
      const formattedBirthday = moment(userBirthday).format('DD.MM.YYYY');

      updateData('birthday', formattedBirthday, setDataForRequest);
    } else {
      removeProperty('birthday', setDataForRequest, dataForRequest);
    }
  }, [values.birthday]);

  return (
    <div className={`${className || 'psycho-registration__step_off'} psycho-registration__form-step_one`}>
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
  setDataForRequest: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dataForRequest: object.isRequired,
};

FirstStep.defaultProps = {
  className: '',
};
