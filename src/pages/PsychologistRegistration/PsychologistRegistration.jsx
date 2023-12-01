import React, { useState } from 'react';
import { string, func } from 'prop-types';
import './PsychologistRegistration.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import { PSYCHO_REGISTRATION_TEXT } from '../../constants/constants';
import Button from '../../components/generic/Button/Button';
import FirstStep from './Steps/FirstStep/FirstStep';
import SecondStep from './Steps/SecondStep/SecondStep';
import ThirdStep from './Steps/ThirdStep/ThirdStep';
import FourthStep from './Steps/FourthStep/FourthStep';
import { useForm } from '../../hooks/useForm';
import { createPsychologist } from '../../utils/auth';
import { usePopup } from '../../hooks/usePopup';

export default function PsychologistRegistration({
  docIdForRequest,
  uploadDocuments,
}) {
  // TODO: добавить анимацию переходов
  const {
    values, handleChange, errors,
    selectedDropdownItems,
    dataForRequest,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
    setCustomValue,
    resetCustomValue,
    setDataForRequest,
    getYears,
    fileForRequest,
  } = useForm();

  const { setValue } = usePopup();

  const [listId, setListId] = useState(0);
  const [step, setStep] = useState(1);

  const createPsycho = async (data) => {
    try {
      await createPsychologist(data);

      setValue({
        data: {
          title: 'Вы успешно зарегистрировались',
        },
      });
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При регистрации произошла ошибка',
        },
      });
    }
  };

  const switchNextStep = () => {
    if (step !== 4) {
      setStep(step + 1);
    } else {
      createPsycho(dataForRequest);
    }
  };

  const switchPrevStep = () => {
    setStep(step - 1);
  };

  const getClosestList = (e, setListValue, onChange) => {
    setListValue(+e.target.closest('ul').id);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <PageLayout
      classes={
        `psycho-registration${step === 1 ? `${' psycho-registration__fist-step'}`
          : `${' psycho-registration__other-step'}`}`
      }
      title="Подать заявку"
      nav={step !== 1 ? (
        <Button
          variant="text-icon"
          onClick={() => switchPrevStep()}
          className="psycho-registration__switch"
        >
          Назад
        </Button>
      ) : null}
    >
      <div className="psycho-registration__container">
        {step === 1 ? (
          <ul className="psycho-registration__text-list">
            {PSYCHO_REGISTRATION_TEXT.map((i) => (
              <li key={i}>
                <p className="psycho-registration__text">{i}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <form className="psycho-registration__form">
          <FirstStep
            className={step === 1 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            selectedDropdownItems={selectedDropdownItems}
            step={step}
            setDataForRequest={setDataForRequest}
            dataForRequest={dataForRequest}
          />
          <SecondStep
            className={step === 2 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            getClosestList={getClosestList}
            setListId={setListId}
            listId={listId}
            setDataForRequest={setDataForRequest}
            getYears={getYears}
            docIdForRequest={docIdForRequest}
            fileForRequest={fileForRequest}
            uploadDocuments={uploadDocuments}
            dataForRequest={dataForRequest}
          />
          <ThirdStep
            className={step === 3 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            getClosestList={getClosestList}
            setListId={setListId}
            listId={listId}
            fileForRequest={fileForRequest}
            uploadDocuments={uploadDocuments}
            docIdForRequest={docIdForRequest}
            setDataForRequest={setDataForRequest}
            dataForRequest={dataForRequest}
          />
          <FourthStep
            className={step === 4 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            selectedDropdownItems={selectedDropdownItems}
            setCustomValue={setCustomValue}
            resetCustomValue={resetCustomValue}
            setDataForRequest={setDataForRequest}
            dataForRequest={dataForRequest}
          />
          <Button
            className="psycho-registration__form_button"
            type={step !== 4 ? 'button' : 'submit'}
            variant="primary"
            size="l"
            disabled={!isValidForm}
            onClick={switchNextStep}
          >
            {step !== 4 ? 'Далее' : 'Подать заявку'}
          </Button>
        </form>
      </div>
    </PageLayout>
  );
}

PsychologistRegistration.propTypes = {
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
};
