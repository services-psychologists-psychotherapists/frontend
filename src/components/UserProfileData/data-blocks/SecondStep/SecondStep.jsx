import React, { useState, useEffect } from 'react';
import {
  bool, objectOf, string, func, number, object,
} from 'prop-types';
import { PSYCHO_REGISTRATION_SECOND_STEP } from '../../../../constants/constants';
import Fieldset from '../../../generic/Fieldset/Fieldset';
import Textarea from '../../../generic/Fieldset/Textarea/Textarea';
import FileUpload from '../../../generic/Fieldset/FileUpload/FileUpload';
import Button from '../../../generic/Button/Button';
import { usePopup } from '../../../../hooks/usePopup';
import {
  checkFile, resetValue, handleDataUpdate, addEducationBlock,
  getDisabledField,
} from '../../../../utils/helpers';

export default function SecondStep({
  values, handleChange,
  errors, inputValidStatus,
  getInvalidInput, step,
  listId, setDataForRequest,
  getYears, docIdForRequest,
  fileForRequest, uploadDocuments,
  setDocIdForRequest, curBlockType,
  currentUser, setValues,
  isReset, setFileForRequest,
  showFileError,
}) {
  const { setValue } = usePopup();

  const [educationBlocks, setEducationBlocks] = useState(
    currentUser.institutes && currentUser.institutes.length > 1 ? [] : [0]
  );
  const [instituteTitle, setInstituteTitle] = useState('');
  const [instituteSpeciality, setInstituteSpeciality] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    setEducationBlocks(currentUser.institutes && currentUser.institutes.length > 1 ? [] : [0]);
    setInstituteTitle('');
    setInstituteSpeciality('');
    setGraduationYear('');
  }, [isReset]);

  useEffect(() => {
    if (currentUser.institutes) {
      if (educationBlocks.length < currentUser.institutes.length) {
        setEducationBlocks((prevBlocks) => [...prevBlocks, prevBlocks.length]);
      }

      currentUser.institutes.forEach((institute, index) => {
        setValues((prevData) => ({
          ...prevData,
          [`institutes_title_${index}`]: institute.title,
          [`institutes_speciality_${index}`]: institute.speciality,
          [`institutes_graduation_year_${index}`]: institute.graduation_year,
        }));
      });
    }
  }, [currentUser, educationBlocks]);

  useEffect(() => {
    const propertyPathTitle = `institutes_title_${listId}`;
    const newInstituteTitle = values[propertyPathTitle];

    const propertyPathSpeciality = `institutes_speciality_${listId}`;
    const newInstituteSpeciality = values[propertyPathSpeciality];

    const propertyPathGraduationYear = `institutes_graduation_year_${listId}`;
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
        setFileForRequest,
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
      {educationBlocks.map((blockId, index) => (
        <ul id={blockId} key={blockId} className="data-list data-list_type_column">
          {PSYCHO_REGISTRATION_SECOND_STEP.map((i) => (
            <li key={i.name}>
              {i.item === 'Fieldset' && (
                <Fieldset
                  inputContainerClasses={i.inputContainerClasses}
                  name={`${i.name}_${blockId}`}
                  element={i.element}
                  title={i.title}
                  typeForInput={i.typeForInput}
                  required={i.required}
                  values={values}
                  handleChange={(e) => handleChange(e)}
                  errors={errors}
                  isValid={getInvalidInput(inputValidStatus[`${i.name}_${blockId}`])}
                  placeholder={i.placeholder}
                  disabled={getDisabledField(blockId, currentUser, 2, step, 'institutes')}
                  minLength={i.minLength}
                  maxLength={i.maxLength}
                  pattern={i.pattern}
                />
              )}
              {i.item === 'Textarea' && (
                <Textarea
                  title={i.title}
                  onChange={(e) => handleChange(e)}
                  name={`${i.name}_${blockId}`}
                  value={values[`${i.name}_${blockId}`]}
                  id={i.id}
                  textareaClassName={i.textareaClassName}
                  disabled={getDisabledField(blockId, currentUser, 2, step, 'institutes')}
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
              disabled={getDisabledField(blockId, currentUser, 2, step, 'institutes')}
              name="institutes"
              isRequired
              showFileError={() => showFileError(setValue)}
            />
          </li>
          {index === educationBlocks.length - 1 && (
            <li>
              <Button
                type="button"
                variant="text"
                onClick={() => addEducationBlock(
                  instituteTitle,
                  instituteSpeciality,
                  graduationYear,
                  docIdForRequest,
                  setEducationBlocks,
                  setDocIdForRequest,
                  setValue,
                  getDisabledField(blockId, currentUser, 2, step, 'institutes'),
                )}
                className="education-btn"
              >
                + добавить высшее образование
              </Button>
            </li>
          )}
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
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  setValues: func,
  isReset: bool,
  setFileForRequest: func.isRequired,
  showFileError: func.isRequired,
};

SecondStep.defaultProps = {
  curBlockType: '',
  currentUser: {},
  setValues: () => {},
  isReset: false,
};
