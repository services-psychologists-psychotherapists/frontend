import React, { useState } from 'react';
import {
  bool, objectOf, string, func, number,
} from 'prop-types';
import './SecondStep.css';
import Title from '../../../../components/generic/Title/Title';
import FormClue from '../../FormClue/FormClue';
import { PSYCHO_REGISTRATION_SECOND_STEP } from '../../../../constants/constants';
import Fieldset from '../../../../components/Fieldset/Fieldset';
import FileUpload from '../../../../components/Fieldset/FileUpload/FileUpload';
import Button from '../../../../components/generic/Button/Button';

export default function SecondStep({
  className,
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  step,
  getClosestList,
  setListId,
}) {
  const [educationBlocks, setEducationBlocks] = useState([0]);

  const addEducationBlock = () => {
    setEducationBlocks((prevBlocks) => [...prevBlocks, prevBlocks.length]);
  };

  return (
    <div className={className || 'psycho-registration__step_off'}>
      <Title
        text="2/4&nbsp;&nbsp;&nbsp;Высшее образование"
        className="psycho-registration__form-title"
        size="s"
      />
      <div className="psycho-registration__form-container">
        <FormClue />
        {educationBlocks.map((blockId) => (
          <ul id={blockId} key={blockId} className="psycho-registration__form-step_list psycho-registration__form-step_list-two">
            {PSYCHO_REGISTRATION_SECOND_STEP.map((i) => (
              <li key={i.name}>
                <Fieldset
                  name={`${i.name}${blockId}` || null}
                  element={i.element || null}
                  title={i.title || null}
                  typeForInput={i.typeForInput || null}
                  required={i.required || false}
                  values={values}
                  handleChange={(e) => getClosestList(e, setListId, handleChange)}
                  errors={errors}
                  isValid={getInvalidInput(inputValidStatus[`${i.name}${blockId}`])}
                  promptClasses={i.promptClasses || ''}
                  typeForDropdown={i.typeForDropdown}
                  placeholder={i.placeholder || null}
                  disabled={step !== 2}
                  inputContainerClasses={i.inputContainerClasses || ''}
                  minLength={i.minLength || null}
                  maxLength={i.maxLength || null}
                />
              </li>
            ))}
            <li className="psycho-registration__form-education">
              <FileUpload
                text="Прикрепить документ об образовании"
                onChange={(e) => getClosestList(e, setListId, handleChange)}
                disabled={step !== 2}
                // isRequired={step === 2}
              />
            </li>
          </ul>
        ))}
      </div>
      <Button
        variant="text"
        onClick={addEducationBlock}
        className="psycho-registration__form-education_btn"
      >
        + добавить высшее образование
      </Button>
    </div>
  );
}

SecondStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  className: string,
  step: number.isRequired,
  getClosestList: func.isRequired,
  setListId: func.isRequired,
};

SecondStep.defaultProps = {
  className: '',
};
