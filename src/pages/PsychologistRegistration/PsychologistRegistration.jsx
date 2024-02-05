import React, { useState, useEffect } from 'react';
import { string, func, object, bool } from 'prop-types';
import './PsychologistRegistration.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import { PSYCHO_REGISTRATION_TEXT } from '../../constants/constants';
import Button from '../../components/generic/Button/Button';
import FirstStep from '../../components/UserProfileData/data-blocks/FirstStep/FirstStep';
import SecondStep from '../../components/UserProfileData/data-blocks/SecondStep/SecondStep';
import ThirdStep from '../../components/UserProfileData/data-blocks/ThirdStep/ThirdStep';
import FourthStep from '../../components/UserProfileData/data-blocks/FourthStep/FourthStep';
import Success from '../../components/Success/Success';
import { useForm } from '../../hooks/useForm';
import { createPsychologist } from '../../utils/services/Api';
import { usePopup } from '../../hooks/usePopup';
import DescrForStep from './DescrForStep/DescrForStep';
import DocsForRegistr from './DocsForRegistr/DocsForRegistr';
import useUploadDoc from '../../hooks/useUploadDoc';
import { showPopupWithValue, showFileError } from '../../utils/helpers';

export default function PsychologistRegistration({
  docIdForRequest, setIsLoading,
  uploadDocuments, setDocIdForRequest,
  curPath, isLoading,
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
    setFileForRequest,
  } = useForm();

  const { setValue } = usePopup();

  const [isSuccess, setIsSuccess] = useState(false);
  const [listId, setListId] = useState(0);
  const [step, setStep] = useState(1);
  const [curBlockType, setCurBlockType] = useState('');

  useUploadDoc(setListId, setCurBlockType, setDocIdForRequest);

  const createPsycho = async (data) => {
    setIsLoading(true);
    try {
      if (!data.themes || !data.approaches) {
        showPopupWithValue(setValue, 'Заполните направления работы и подходы');
      } else {
        await createPsychologist(data);

        setIsSuccess(true);
      }
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При регистрации произошла ошибка',
          text: 'Проверьте корректность введенных данных или попробуйте позже',
        },
      });
    } finally {
      setIsLoading(false);
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
    window.scrollTo(0, 0);
  }, []);

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
          layoutClassName={
            `psycho-registration${
              step === 1 ? `${' psycho-registration__fist-step'}` : ''
            }`
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
              <DescrForStep
                className={step === 1 ? 'psycho-registration__step_on' : ''}
                step={step}
                title="1/4&nbsp;&nbsp;&nbsp;Основная информация"
              >
                <FirstStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  selectedDropdownItems={selectedDropdownItems}
                  step={step}
                  setDataForRequest={setDataForRequest}
                  dataForRequest={dataForRequest}
                  curPath={curPath}
                />
              </DescrForStep>
              <DescrForStep
                className={step === 2 ? 'psycho-registration__step_on' : ''}
                step={step}
                title="2/4&nbsp;&nbsp;&nbsp;Высшее образование"
              >
                <SecondStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  step={step}
                  setListId={setListId}
                  listId={listId}
                  setDataForRequest={setDataForRequest}
                  getYears={getYears}
                  docIdForRequest={docIdForRequest}
                  fileForRequest={fileForRequest}
                  uploadDocuments={uploadDocuments}
                  dataForRequest={dataForRequest}
                  setDocIdForRequest={setDocIdForRequest}
                  curBlockType={curBlockType}
                  setFileForRequest={setFileForRequest}
                  showFileError={showFileError}
                />
              </DescrForStep>
              <DescrForStep
                className={step === 3 ? 'psycho-registration__step_on' : ''}
                step={step}
                title="3/4&nbsp;&nbsp;&nbsp;Повышение квалификации (при наличии)"
              >
                <ThirdStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  step={step}
                  setListId={setListId}
                  listId={listId}
                  fileForRequest={fileForRequest}
                  uploadDocuments={uploadDocuments}
                  docIdForRequest={docIdForRequest}
                  setDataForRequest={setDataForRequest}
                  dataForRequest={dataForRequest}
                  setDocIdForRequest={setDocIdForRequest}
                  curBlockType={curBlockType}
                  setFileForRequest={setFileForRequest}
                  showFileError={showFileError}
                />
              </DescrForStep>
              <DescrForStep
                className={step === 4 ? 'psycho-registration__step_on psycho-registration__last-step' : ''}
                step={step}
                title="4/4&nbsp;&nbsp;&nbsp;О работе"
              >
                <FourthStep
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
              </DescrForStep>
              {step === 4
                && (
                  <DocsForRegistr
                    setValue={setValue}
                    showPopupWithValue={showPopupWithValue}
                  />
                )}
              <Button
                className="psycho-registration__form_button"
                type={step !== 4 ? 'button' : 'submit'}
                variant="primary"
                size="l"
                disabled={!isValidForm || isLoading}
                onClick={switchNextStep}
              >
                {isLoading ? 'Загрузка...' : step !== 4 ? 'Далее' : 'Подать заявку'}
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
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  isLoading: bool.isRequired,
  setIsLoading: func.isRequired,
};
