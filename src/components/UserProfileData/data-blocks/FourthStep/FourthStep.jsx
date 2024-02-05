import React, {
  useEffect, useContext, useState,
} from 'react';
import {
  bool, objectOf, string, func, number, oneOfType, array, object
} from 'prop-types';
import './FourthStep.css';
import {
  PSYCHO_REGISTRATION_FOURTH_STEP_ONE,
  PSYCHO_REGISTRATION_FOURTH_STEP_TWO,
  checkboxDropdownElement,
  titlesDropdownElement, dropdownLists,
} from '../../../../constants/constants';
import Fieldset from '../../../generic/Fieldset/Fieldset';
import Textarea from '../../../generic/Fieldset/Textarea/Textarea';
import { removeProperty, updateData } from '../../../../utils/helpers';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function FourthStep({
  values, handleChange,
  errors, inputValidStatus,
  getInvalidInput,
  step, selectedDropdownItems,
  resetCustomValue,
  setCustomValue,
  setDataForRequest,
  dataForRequest,
}) {
  const { approaches } = useContext(CurrentUserContext);
  const [psychoApproaches, setPsychoApproaches] = useState([]);

  useEffect(() => {
    if (approaches) {
      const approachesSet = new Set(dropdownLists.approachList);
      const customApproaches = [];

      approaches.forEach((i) => {
        if (!approachesSet.has(i.title)) {
          customApproaches.push(i.title);
        }
      });
      setPsychoApproaches((customApproaches).concat(dropdownLists.approachList));
    } else {
      setPsychoApproaches(dropdownLists.approachList);
    }
  }, [approaches]);

  useEffect(() => {
    if (values.about) {
      updateData('about', values.about, setDataForRequest);
    } else {
      removeProperty('about', setDataForRequest, dataForRequest);
    }
  }, [values.about]);

  useEffect(() => {
    if (values.price && Number(values.price)) {
      updateData('price', values.price, setDataForRequest);
    } else {
      removeProperty('price', setDataForRequest, dataForRequest);
    }
  }, [values.price]);

  useEffect(() => {
    if (values.experience && Number(values.experience)) {
      updateData('experience', values.experience, setDataForRequest);
    } else {
      removeProperty('experience', setDataForRequest, dataForRequest);
    }
  }, [values.experience]);

  return (
    <ul className="data-list data-list_type_column">
      {PSYCHO_REGISTRATION_FOURTH_STEP_ONE.map((i) => (
        <li key={i.name}>
          <Fieldset
            name={i.name}
            element={i.element}
            title={i.title}
            typeForInput={i.typeForInput}
            required={i.required}
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
            isValid={getInvalidInput(inputValidStatus[i.name])}
            promptClasses={i.promptClasses}
            selectedDropdownItems={selectedDropdownItems}
            dropdownContent={i.name === 'themes' ? i.dropdownContent : psychoApproaches}
            typeForDropdown={i.typeForDropdown}
            disabled={step !== 4}
            resetCustomValue={resetCustomValue}
            setCustomValue={setCustomValue}
            customElement={i.customElement}
            placeholder={i.placeholder}
            classesForInput={i.classesForInput}
            autoComplete={i.autoComplete}
          />
        </li>
      ))}
      <div className="data-list_type_grid">
        {PSYCHO_REGISTRATION_FOURTH_STEP_TWO.map((i) => (
          <li key={i.name}>
            <Fieldset
              name={i.name}
              element={i.element}
              title={i.title}
              typeForInput={i.typeForInput}
              required={i.required}
              values={values}
              handleChange={(e) => handleChange(e)}
              errors={errors}
              isValid={getInvalidInput(inputValidStatus[i.name])}
              disabled={step !== 4}
              inputContainerClasses={i.inputContainerClasses || ''}
              minLength={i.minLength}
              maxLength={i.maxLength}
              placeholder={i.placeholder}
              pattern={i.pattern}
              promptClasses="data-list__prompt"
            />
          </li>
        ))}
      </div>
      <li>
        <Textarea
          title="Расскажите нам о себе в свободной форме"
          placeholder="Например, что считаете нам нужно узнать о вас, чтобы понять, какой вы специалист?"
          onChange={(e) => handleChange(e)}
          name="about"
          id="psycho-about"
          value={values.about}
          textareaClassName="data-list__textarea"
          disabled={step !== 4}
          required
          errors={errors || null}
          minLength="1"
          maxLength="500"
        />
      </li>
    </ul>
  );
}

FourthStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  step: number.isRequired,
  selectedDropdownItems: objectOf(
    oneOfType([
      string,
      array,
    ])
  ).isRequired,
  resetCustomValue: func,
  setCustomValue: func,
  setDataForRequest: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dataForRequest: object.isRequired,
};

FourthStep.defaultProps = {
  resetCustomValue: () => {},
  setCustomValue: () => {},
};
