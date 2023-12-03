import React, { useState, useEffect } from 'react';
import { string, func } from 'prop-types';
import './PsychologistRegistration.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import { PSYCHO_REGISTRATION_TEXT } from '../../constants/constants';
import Button from '../../components/generic/Button/Button';
import FirstStep from './Steps/FirstStep/FirstStep';
import SecondStep from './Steps/SecondStep/SecondStep';
import ThirdStep from './Steps/ThirdStep/ThirdStep';
import FourthStep from './Steps/FourthStep/FourthStep';
import Success from '../../components/Success/Success';
import { useForm } from '../../hooks/useForm';
import { createPsychologist } from '../../utils/auth';
import { usePopup } from '../../hooks/usePopup';

export default function PsychologistRegistration({
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
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

  const [isSuccess, setIsSuccess] = useState(false);
  const [listId, setListId] = useState(0);
  const [step, setStep] = useState(1);

  const createPsycho = async (data) => {
    try {
      await createPsychologist(data);

      setIsSuccess(true);
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

  useEffect(() => {
    if (step === 2 || step === 3) {
      const handleClick = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          setListId(+e.target.closest('ul').id);
        }
      };

      setDocIdForRequest('');

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }

    return () => {};
  }, [step]);

  return (
    <>
      {isSuccess
        && (
        <Success
          title="Заявка отправлена!"
          text="Как только мы все проверим, Вам на почту придет уведомление"
          buttonText="На главную"
          buttonHref="/"
        />
        )}
      {!isSuccess && (
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
                // getClosestList={getClosestList}
                setListId={setListId}
                listId={listId}
                setDataForRequest={setDataForRequest}
                getYears={getYears}
                docIdForRequest={docIdForRequest}
                fileForRequest={fileForRequest}
                uploadDocuments={uploadDocuments}
                dataForRequest={dataForRequest}
                setDocIdForRequest={setDocIdForRequest}
              />
              <ThirdStep
                className={step === 3 ? 'psycho-registration__step_on' : ''}
                values={values}
                handleChange={handleChange}
                errors={errors}
                inputValidStatus={inputValidStatus}
                getInvalidInput={getInvalidInput}
                step={step}
                // getClosestList={getClosestList}
                setListId={setListId}
                listId={listId}
                fileForRequest={fileForRequest}
                uploadDocuments={uploadDocuments}
                docIdForRequest={docIdForRequest}
                setDataForRequest={setDataForRequest}
                dataForRequest={dataForRequest}
                setDocIdForRequest={setDocIdForRequest}
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
      )}
    </>
  );
}

PsychologistRegistration.propTypes = {
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
};
