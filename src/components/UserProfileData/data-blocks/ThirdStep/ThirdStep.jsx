import React, { useState, useEffect } from 'react';
import {
  bool, objectOf, string, func, number, object,
} from 'prop-types';
import { PSYCHO_REGISTRATION_THIRD_STEP } from '../../../../constants/constants';
import Fieldset from '../../../generic/Fieldset/Fieldset';
import FileUpload from '../../../generic/Fieldset/FileUpload/FileUpload';
import Button from '../../../generic/Button/Button';
import Textarea from '../../../generic/Fieldset/Textarea/Textarea';
import { usePopup } from '../../../../hooks/usePopup';
import {
  checkFile, resetValue, handleDataUpdate, addEducationBlock,
  getDisabledField,
} from '../../../../utils/helpers';

export default function ThirdStep({
  values, handleChange,
  errors, inputValidStatus,
  getInvalidInput, step,
  listId, fileForRequest,
  uploadDocuments, docIdForRequest,
  setDataForRequest, setDocIdForRequest,
  curBlockType, currentUser,
  setValues, isReset,
  showFileError,
}) {
  const { setValue } = usePopup();

  const [educationBlocks, setEducationBlocks] = useState(
    currentUser.courses && currentUser.courses.length > 1 ? [] : [0]
  );
  const [coursesGraduationYear, setCoursesGraduationYear] = useState('');
  const [coursesTitle, setCoursesTitle] = useState('');
  const [coursesSpeciality, setCoursesSpeciality] = useState('');
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    setEducationBlocks(currentUser.courses && currentUser.courses.length > 1 ? [] : [0]);
    setCoursesTitle('');
    setCoursesSpeciality('');
    setCoursesGraduationYear('');
  }, [isReset]);

  useEffect(() => {
    if (currentUser.courses) {
      if (educationBlocks.length < currentUser.courses.length) {
        setEducationBlocks((prevBlocks) => [...prevBlocks, prevBlocks.length]);
      }

      currentUser.courses.forEach((course, index) => {
        setValues((prevData) => ({
          ...prevData,
          [`courses_title_${index}`]: course.title,
          [`courses_speciality_${index}`]: course.speciality,
          [`courses_graduation_year_${index}`]: course.graduation_year,
        }));
      });
    }
  }, [currentUser, educationBlocks]);

  useEffect(() => {
    const propertyPathGraduationYear = `courses_graduation_year_${listId}`;
    const newCoursesGraduationYear = values[propertyPathGraduationYear];

    const propertyPathTitle = `courses_title_${listId}`;
    const newCoursesTitle = values[propertyPathTitle];

    const propertyPathSpeciality = `courses_speciality_${listId}`;
    const newCoursesSpeciality = values[propertyPathSpeciality];

    if (newCoursesGraduationYear !== coursesGraduationYear) {
      setCoursesGraduationYear(newCoursesGraduationYear);
    }

    if (newCoursesTitle !== coursesTitle) {
      setCoursesTitle(newCoursesTitle);
    }

    if (newCoursesSpeciality !== coursesSpeciality) {
      setCoursesSpeciality(newCoursesSpeciality);
    }
  }, [values, listId]);

  useEffect(() => {
    if (isRendered && step === 3 && curBlockType === 'courses') {
      checkFile(
        fileForRequest,
        step,
        3,
        uploadDocuments,
        setValue,
        () => resetValue('document', 'courses', listId, setDataForRequest),
      );
    }
  }, [fileForRequest]);

  useEffect(() => {
    if (docIdForRequest && step === 3 && curBlockType === 'courses') {
      handleDataUpdate(
        'document',
        docIdForRequest,
        setDataForRequest,
        'courses',
        listId,
      );
    }
  }, [docIdForRequest]);

  useEffect(() => {
    if (isRendered && step === 3) {
      if (coursesTitle) {
        handleDataUpdate(
          'title',
          coursesTitle,
          setDataForRequest,
          'courses',
          listId,
        );
      } else {
        resetValue('title', 'courses', listId, setDataForRequest);
      }
    }
  }, [coursesTitle]);

  useEffect(() => {
    if (isRendered && step === 3) {
      if (coursesSpeciality) {
        handleDataUpdate(
          'speciality',
          coursesSpeciality,
          setDataForRequest,
          'courses',
          listId,
        );
      } else {
        resetValue('speciality', 'courses', listId, setDataForRequest);
      }
    }
  }, [coursesSpeciality]);

  useEffect(() => {
    if (isRendered && step === 3) {
      if (coursesGraduationYear && coursesGraduationYear.length === 4) {
        handleDataUpdate(
          'graduation_year',
          coursesGraduationYear,
          setDataForRequest,
          'courses',
          listId
        );
      } else {
        resetValue('graduation_year', 'courses', listId, setDataForRequest);
      }
    }
  }, [coursesGraduationYear]);

  return (
    <div className="data-list-container">
      {educationBlocks.map((blockId, index) => (
        <ul id={blockId} key={blockId} className="data-list data-list_type_column">
          {PSYCHO_REGISTRATION_THIRD_STEP.map((i) => (
            <li key={i.name}>
              {i.item === 'Fieldset' && (
              <Fieldset
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
                disabled={getDisabledField(blockId, currentUser, 3, step, 'courses')}
                inputContainerClasses={i.inputContainerClasses || ''}
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
                disabled={getDisabledField(blockId, currentUser, 3, step, 'courses')}
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
              disabled={getDisabledField(blockId, currentUser, 3, step, 'courses')}
              name="courses"
              showFileError={() => showFileError(setValue)}
            />
          </li>
          {index === educationBlocks.length - 1 && (
            <li>
              <Button
                type="button"
                variant="text"
                onClick={
                  () => addEducationBlock(
                    coursesTitle,
                    coursesSpeciality,
                    coursesGraduationYear,
                    docIdForRequest,
                    setEducationBlocks,
                    setDocIdForRequest,
                    setValue,
                    getDisabledField(blockId, currentUser, 3, step, 'courses'),
                  )
                }
                className="education-btn"
              >
                + добавить повышение квалификации
              </Button>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}

ThirdStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  step: number.isRequired,
  listId: number.isRequired,
  fileForRequest: objectOf(string).isRequired,
  uploadDocuments: func.isRequired,
  docIdForRequest: string.isRequired,
  setDataForRequest: func.isRequired,
  setDocIdForRequest: func.isRequired,
  curBlockType: string,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  setValues: func,
  isReset: bool,
  showFileError: func.isRequired,
};

ThirdStep.defaultProps = {
  curBlockType: '',
  currentUser: {},
  setValues: () => {},
  isReset: false,
};
