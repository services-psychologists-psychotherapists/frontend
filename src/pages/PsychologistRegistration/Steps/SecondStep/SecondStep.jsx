import React, { useState, useEffect } from 'react';
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
import { usePopup } from '../../../../hooks/usePopup';
import { checkFile, resetValue, handleDataUpdate } from '../../../../utils/helpers';
// TODO: Запретить ввод букв в Периоде обучения?

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
  listId,
  setDataForRequest,
  getYears,
  docIdForRequest,
  fileForRequest,
  uploadDocuments,
}) {
  const { setValue } = usePopup();

  const [instituteTitle, setInstituteTitle] = useState(null);
  const [instituteSpeciality, setInstituteSpeciality] = useState(null);
  const [graduationYear, setGraduationYear] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [educationBlocks, setEducationBlocks] = useState([0]);

  const addEducationBlock = () => {
    setEducationBlocks((prevBlocks) => [...prevBlocks, prevBlocks.length]);
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    const propertyPathTitle = `institutes_title${listId}`;
    const newInstituteTitle = values[propertyPathTitle];

    const propertyPathSpeciality = `institutes_speciality${listId}`;
    const newInstituteSpeciality = values[propertyPathSpeciality];

    const propertyPathGraduationYear = `institutes_graduation_year${listId}`;
    const newGraduationYear = values[propertyPathGraduationYear];

    if (newInstituteTitle !== instituteTitle) {
      setInstituteTitle(newInstituteTitle);
    }

    if (newInstituteSpeciality !== instituteSpeciality) {
      setInstituteSpeciality(newInstituteSpeciality);
    }

    if (newGraduationYear !== graduationYear) {
      setGraduationYear(newGraduationYear);
    }
  }, [values, listId]);

  useEffect(() => {
    if (isRendered && step === 2) {
      if (graduationYear) {
        const minMaxArr = getYears([graduationYear]);

        if (minMaxArr && minMaxArr[0].length > 1) {
          const yearsArr = minMaxArr[1];

          if (
            (yearsArr[0].toString().length === 4)
            && (yearsArr[1].toString().length === 4)
          ) {
            handleDataUpdate(
              'graduation_year',
              `${yearsArr[0]}-${yearsArr[1]}`,
              setDataForRequest,
              'institutes',
              listId,
            );

            return;
          }
        }
      }

      resetValue(
        'graduation_year',
        'institutes',
        listId,
        setDataForRequest,
      );
    }
  }, [graduationYear, isRendered]);

  useEffect(() => {
    if (isRendered && step === 2) {
      if (instituteTitle) {
        handleDataUpdate(
          'title',
          instituteTitle,
          setDataForRequest,
          'institutes',
          listId,
        );
      } else {
        resetValue(
          'title',
          'institutes',
          listId,
          setDataForRequest,
        );
      }
    }
  }, [instituteTitle, isRendered]);

  useEffect(() => {
    if (isRendered && step === 2) {
      if (instituteSpeciality) {
        handleDataUpdate(
          'speciality',
          instituteSpeciality,
          setDataForRequest,
          'institutes',
          listId,
        );
      } else {
        resetValue(
          'speciality',
          'institutes',
          listId,
          setDataForRequest,
        );
      }
    }
  }, [instituteSpeciality, isRendered]);

  useEffect(() => {
    if (isRendered && step === 2) {
      checkFile(
        fileForRequest,
        step,
        2,
        uploadDocuments,
        setValue,
        () => resetValue(
          'document',
          'institutes',
          listId,
          setDataForRequest,
        ),
      );
    }
  }, [fileForRequest]);

  useEffect(() => {
    if (docIdForRequest && step === 2) {
      handleDataUpdate(
        'document',
        docIdForRequest,
        setDataForRequest,
        'institutes',
        listId,
      );
    }
  }, [docIdForRequest]);

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
  listId: number.isRequired,
  setDataForRequest: func.isRequired,
  getYears: func.isRequired,
  docIdForRequest: string.isRequired,
  fileForRequest: objectOf(string).isRequired,
  uploadDocuments: func.isRequired,
};

SecondStep.defaultProps = {
  className: '',
};
