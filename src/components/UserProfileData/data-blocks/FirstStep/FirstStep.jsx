import React, { useEffect } from 'react';
import {
  bool, objectOf, string, func, oneOfType, arrayOf, number, object
} from 'prop-types';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import moment from 'moment';
import './FirsStep.css';
import '../../UserProfileData.css';
import Fieldset from '../../../Fieldset/Fieldset';
import {
  radioDropdownElement, PSYCHO_REGISTRATION_FIRST_STEP
} from '../../../../constants/constants';
import { removeProperty, updateData } from '../../../../utils/helpers';

export default function FirstStep({
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  selectedDropdownItems,
  step,
  setDataForRequest,
  dataForRequest,
  // typeOfUse,
}) {
  useEffect(() => {
    if (values.first_name) {
      updateData('first_name', values.first_name, setDataForRequest);
    } else {
      removeProperty('first_name', setDataForRequest, dataForRequest);
    }
  }, [values.first_name]);

  useEffect(() => {
    if (values.last_name) {
      updateData('last_name', values.last_name, setDataForRequest);
    } else {
      removeProperty('last_name', setDataForRequest, dataForRequest);
    }
  }, [values.last_name]);

  useEffect(() => {
    const isEmail = /@/.test(values.email);

    if (isEmail) {
      const email = values.email.toLowerCase();

      updateData('email', email, setDataForRequest);
    } else {
      removeProperty('email', setDataForRequest, dataForRequest);
    }
  }, [values.email]);

  useEffect(() => {
    const validPhoneNumber = values.phone_number && parsePhoneNumberFromString(values.phone_number);

    if (validPhoneNumber) {
      updateData('phone_number', validPhoneNumber.number, setDataForRequest);
    } else {
      removeProperty('phone_number', setDataForRequest, dataForRequest);
    }
  }, [values.phone_number]);

  useEffect(() => {
    if (values.birthday) {
      const formattedBirthday = moment(values.birthday).format('DD.MM.YYYY');

      updateData('birthday', formattedBirthday, setDataForRequest);
    } else {
      removeProperty('birthday', setDataForRequest, dataForRequest);
    }
  }, [values.birthday]);

  return (
    <ul className="data-list data-list_type_grid">
      {PSYCHO_REGISTRATION_FIRST_STEP.map((i) => (
        <li key={i.name}>
          <Fieldset
            name={i.name}
            element={i.element}
            title={i.title}
            typeForInput={i.typeForInput}
            required={i.required}
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
            promptClasses={i.promptClasses}
            selectedDropdownItems={selectedDropdownItems}
            dropdownContent={i.dropdownContent}
            typeForDropdown={i.typeForDropdown}
            classesForAbsoluteList="data-list__gender"
            disabled={step !== 1}
            minLength={i.minLength}
            maxLength={i.maxLength}
            autoComplete={i.autoComplete}
            placeholder={i.placeholder}
          />
        </li>
      ))}
    </ul>
  );
}

FirstStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
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
  // typeOfUse: string,
};
