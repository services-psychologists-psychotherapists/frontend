import React, { useState, useEffect } from 'react';
import {
  bool, objectOf, string, func, number,
} from 'prop-types';
import { PSYCHO_REGISTRATION_SECOND_STEP } from '../../../../constants/constants';
import Fieldset from '../../../Fieldset/Fieldset';
import Textarea from '../../../Fieldset/Textarea/Textarea';
import FileUpload from '../../../Fieldset/FileUpload/FileUpload';
import Button from '../../../generic/Button/Button';
import { usePopup } from '../../../../hooks/usePopup';
import { checkFile, resetValue, handleDataUpdate, addEducationBlock } from '../../../../utils/helpers';
// TODO: Запретить ввод букв в Периоде обучения?

export default function SecondStep({
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  step,
  listId,
  setDataForRequest,
  getYears,
  docIdForRequest,
  fileForRequest,
  uploadDocuments,
  setDocIdForRequest,
  curBlockType,
}) {
  const { setValue } = usePopup();

  const [instituteTitle, setInstituteTitle] = useState('');
  const [instituteSpeciality, setInstituteSpeciality] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [isRendered, setIsRendered] = useState(false);
  const [educationBlocks, setEducationBlocks] = useState([0]);

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
  }, [graduationYear]);

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
  }, [instituteTitle]);

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
  }, [instituteSpeciality]);

  useEffect(() => {
    if (isRendered && step === 2 && curBlockType === 'institutes') {
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
    if (docIdForRequest && step === 2 && curBlockType === 'institutes') {
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
    <div className="data-list-container">
      {educationBlocks.map((blockId) => (
        <ul id={blockId} key={blockId} className="data-list data-list_type_column">
          {PSYCHO_REGISTRATION_SECOND_STEP.map((i) => (
            <li key={i.name}>
              {i.item === 'Fieldset' && (
              <Fieldset
                inputContainerClasses={i.inputContainerClasses}
                name={`${i.name}${blockId}`}
                element={i.element}
                title={i.title}
                typeForInput={i.typeForInput}
                required={i.required}
                values={values}
                handleChange={(e) => handleChange(e)}
                errors={errors}
                isValid={getInvalidInput(inputValidStatus[`${i.name}${blockId}`])}
                placeholder={i.placeholder}
                disabled={step !== 2}
                minLength={i.minLength}
                maxLength={i.maxLength}
              />
              )}
              {i.item === 'Textarea' && (
              <Textarea
                title={i.title}
                onChange={(e) => handleChange(e)}
                name={`${i.name}${blockId}`}
                value={values[`${i.name}${blockId}`]}
                id={i.id}
                textareaClassName={i.textareaClassName}
                disabled={step !== 2}
                required={i.required}
                errors={errors}
                minLength={i.minLength}
                maxLength={i.maxLength}
                placeholder={i.placeholder}
              />
              )}
            </li>
          ))}
          <li>
            <FileUpload
              text="Прикрепить документ об образовании"
              onChange={(e) => handleChange(e)}
              disabled={step !== 2}
              className="data-list__file-upload"
              name="institutes"
            />
          </li>
          <li>
            <Button
              variant="text"
              onClick={
                  () => addEducationBlock(
                    instituteTitle,
                    instituteSpeciality,
                    graduationYear,
                    docIdForRequest,
                    setEducationBlocks,
                    setDocIdForRequest,
                    setValue,
                  )
                }
              className="education-btn"
            >
              + добавить высшее образование
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
}

SecondStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  step: number.isRequired,
  listId: number.isRequired,
  setDataForRequest: func.isRequired,
  getYears: func.isRequired,
  docIdForRequest: string.isRequired,
  fileForRequest: objectOf(string).isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
  curBlockType: string,
};

SecondStep.defaultProps = {
  curBlockType: '',
};
