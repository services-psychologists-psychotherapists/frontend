import React, { useState, useEffect } from 'react';
import {
  bool, objectOf, string, func, number,
} from 'prop-types';
import '../SecondStep/SecondStep.css';
import Title from '../../../../components/generic/Title/Title';
import FormClue from '../../FormClue/FormClue';
import { PSYCHO_REGISTRATION_THIRD_STEP } from '../../../../constants/constants';
import Fieldset from '../../../../components/Fieldset/Fieldset';
import FileUpload from '../../../../components/Fieldset/FileUpload/FileUpload';
import Button from '../../../../components/generic/Button/Button';
import Textarea from '../../../../components/Fieldset/Textarea/Textarea';
import { usePopup } from '../../../../hooks/usePopup';
import { checkFile, resetValue, handleDataUpdate, addEducationBlock } from '../../../../utils/helpers';
// TODO: Одинаковый со втором сделать общий

export default function ThirdStep({
  className,
  values,
  handleChange,
  errors,
  inputValidStatus,
  getInvalidInput,
  step,
  listId,
  fileForRequest,
  uploadDocuments,
  docIdForRequest,
  setDataForRequest,
  setDocIdForRequest,
}) {
  const { setValue } = usePopup();

  const [educationBlocks, setEducationBlocks] = useState([0]);
  const [coursesGraduationYear, setCoursesGraduationYear] = useState('');
  const [coursesTitle, setCoursesTitle] = useState('');
  const [coursesSpeciality, setCoursesSpeciality] = useState('');
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    const propertyPathGraduationYear = `courses_graduation_year${listId}`;
    const newCoursesGraduationYear = values[propertyPathGraduationYear];

    const propertyPathTitle = `courses_title${listId}`;
    const newCoursesTitle = values[propertyPathTitle];

    const propertyPathSpeciality = `courses_speciality${listId}`;
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
    if (isRendered && step === 3) {
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
    if (docIdForRequest && step === 3) {
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
    <div className={className || 'psycho-registration__step_off'}>
      <Title
        text="3/4&nbsp;&nbsp;&nbsp;Повышение квалификации"
        className="psycho-registration__form-title"
        size="s"
      />
      <div className="psycho-registration__form-container">
        <FormClue />
        {educationBlocks.map((blockId) => (
          // TODO: классы со второго
          <ul id={blockId} key={blockId} className="psycho-registration__form-step_list psycho-registration__form-step_list-two">
            {PSYCHO_REGISTRATION_THIRD_STEP.map((i) => (
              <li key={i.name}>
                {i.item === 'Fieldset' && (
                  <Fieldset
                    name={`${i.name}${blockId}` || null}
                    element={i.element || null}
                    title={i.title || null}
                    typeForInput={i.typeForInput || null}
                    required={i.required || false}
                    values={values}
                    handleChange={(e) => handleChange(e)}
                    errors={errors}
                    isValid={getInvalidInput(inputValidStatus[`${i.name}${blockId}`])}
                    placeholder={i.placeholder || null}
                    disabled={step !== 3}
                    inputContainerClasses={i.inputContainerClasses || ''}
                    minLength={i.minLength || null}
                    maxLength={i.maxLength || null}
                  />
                )}
                {i.item === 'Textarea' && (
                  <Textarea
                    title={i.title || null}
                    onChange={(e) => handleChange(e)}
                    name={`${i.name}${blockId}` || null}
                    value={values[`${i.name}${blockId}`]}
                    id={i.id || null}
                    textareaClassName={i.textareaClassName || null}
                    containerClassName={i.containerClassName || null}
                    disabled={step !== 3}
                    required={i.required || false}
                    errors={errors || null}
                    minLength={i.minLength || null}
                    maxLength={i.maxLength || null}
                    placeholder={i.placeholder || null}
                  />
                )}
              </li>
            ))}
            <li className="psycho-registration__form-education">
              <FileUpload
                text="Прикрепить документ об образовании"
                onChange={(e) => handleChange(e)}
                disabled={step !== 3}
              />
            </li>
          </ul>
        ))}
      </div>
      <Button
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
          )
        }
        className="psycho-registration__form-education_btn"
      >
        + добавить повышение квалификации
      </Button>
    </div>
  );
}

ThirdStep.propTypes = {
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  className: string,
  step: number.isRequired,
  listId: number.isRequired,
  fileForRequest: objectOf(string).isRequired,
  uploadDocuments: func.isRequired,
  docIdForRequest: string.isRequired,
  setDataForRequest: func.isRequired,
  setDocIdForRequest: func.isRequired,
};

ThirdStep.defaultProps = {
  className: '',
};
