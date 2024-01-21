import React, { useEffect, useState } from 'react';
import { object, string, func } from 'prop-types';
import moment from 'moment';
import './UserProfileData.css';
import FirstStep from './data-blocks/FirstStep/FirstStep';
import SecondStep from './data-blocks/SecondStep/SecondStep';
import ThirdStep from './data-blocks/ThirdStep/ThirdStep';
import FourthStep from './data-blocks/FourthStep/FourthStep';
import { useForm } from '../../hooks/useForm';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';
import TitleForBlock from './TitleForBlock/TitleForBlock';
import Button from '../generic/Button/Button';
import useUploadDoc from '../../hooks/useUploadDoc';
import { usePopup } from '../../hooks/usePopup';
import { showFileError } from '../../utils/helpers';

export default function UserProfileData({
  currentUser, docIdForRequest,
  uploadDocuments, setDocIdForRequest,
  changePsychoAvatar, changeClientAvatar,
  changePsychologistData, changeClientData,
  curPath,
}) {
  const {
    values, handleChange, errors,
    selectedDropdownItems, dataForRequest,
    isValidForm, inputValidStatus,
    getInvalidInput, setCustomValue,
    resetCustomValue, setDataForRequest,
    getYears, fileForRequest,
    setValues, setSelectedDropdownItems,
    resetForm, setFileForRequest,
  } = useForm();

  const [isReset, setIsReset] = useState(false);
  const [listId, setListId] = useState(0);
  const [curBlockType, setCurBlockType] = useState('');
  const token = localStorage.getItem('jwt');
  const { setValue } = usePopup();

  useUploadDoc(setListId, setCurBlockType, setDocIdForRequest);

  useEffect(() => {
    const data = Object.entries(currentUser).reduce((acc, [key, value]) => {
      acc[key] = String(value);

      return acc;
    }, {});

    data.birthday = moment(currentUser.birthday, 'DD.MM.YYYY').format('YYYY-MM-DD');
    delete data.themes;
    delete data.approaches;
    delete data.institutes;
    delete data.courses;

    setValues((prevData) => ({
      ...prevData,
      ...data,
    }));

    if (currentUser.role === 'psychologist') {
      setDataForRequest({ institutes: currentUser.institutes, courses: currentUser.courses });
    }
  }, [currentUser, isReset]);

  useEffect(() => {
    const data = {
      gender: currentUser.gender,
    };

    if (currentUser.role === 'psychologist') {
      data.themes = currentUser.themes;
      data.approaches = currentUser.approaches;
    }

    if (data.gender === 'male') data.gender = 'Мужской';
    if (data.gender === 'female') data.gender = 'Женский';

    if (data.themes) {
      // eslint-disable-next-line no-unused-vars
      data.themes = data.themes.map(({ id, title }) => title);
    }

    if (data.approaches) {
      // eslint-disable-next-line no-unused-vars
      data.approaches = data.approaches.map(({ id, title }) => title);
    }

    setSelectedDropdownItems((prevData) => ({
      ...prevData,
      ...data,
    }));
  }, [currentUser, isReset]);

  return (
    <section className="user-data">
      <ProfileCard
        currentUser={currentUser}
        changePsychoAvatar={changePsychoAvatar}
        changeClientAvatar={changeClientAvatar}
        values={values}
      />
      <BlockWithTitle
        title="Анкетные данные"
      >
        <form className="user-data__form">
          <TitleForBlock
            text="Общая информация"
          >
            <FirstStep
              className="user-data__first-step"
              values={values}
              handleChange={handleChange}
              errors={errors}
              inputValidStatus={inputValidStatus}
              getInvalidInput={getInvalidInput}
              selectedDropdownItems={selectedDropdownItems}
              step={1}
              setDataForRequest={setDataForRequest}
              dataForRequest={dataForRequest}
              curPath={curPath}
            />
          </TitleForBlock>
          {currentUser.role === 'psychologist' && (
            <>
              <TitleForBlock
                text="Высшее образование"
              >
                <SecondStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  step={2}
                  listId={listId}
                  setDataForRequest={setDataForRequest}
                  getYears={getYears}
                  docIdForRequest={docIdForRequest}
                  fileForRequest={fileForRequest}
                  uploadDocuments={uploadDocuments}
                  setDocIdForRequest={setDocIdForRequest}
                  curBlockType={curBlockType}
                  currentUser={currentUser}
                  setValues={setValues}
                  isReset={isReset}
                  setFileForRequest={setFileForRequest}
                  showFileError={showFileError}
                />
              </TitleForBlock>
              <TitleForBlock
                text="Повышение квалификации"
              >
                <ThirdStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  step={3}
                  listId={listId}
                  fileForRequest={fileForRequest}
                  uploadDocuments={uploadDocuments}
                  docIdForRequest={docIdForRequest}
                  setDataForRequest={setDataForRequest}
                  setDocIdForRequest={setDocIdForRequest}
                  curBlockType={curBlockType}
                  currentUser={currentUser}
                  setValues={setValues}
                  isReset={isReset}
                  setFileForRequest={setFileForRequest}
                />
              </TitleForBlock>
              <TitleForBlock
                text="Дополнительная информация"
              >
                <FourthStep
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  inputValidStatus={inputValidStatus}
                  getInvalidInput={getInvalidInput}
                  step={4}
                  selectedDropdownItems={selectedDropdownItems}
                  resetCustomValue={resetCustomValue}
                  setCustomValue={setCustomValue}
                  setDataForRequest={setDataForRequest}
                  dataForRequest={dataForRequest}
                />
              </TitleForBlock>
            </>
          )}
          <div className="user-data__buttons">
            <Button
              type="button"
              variant="secondary"
              size="l"
              onClick={() => {
                resetForm();
                setIsReset(!isReset);
              }}
            >
              Сбросить
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="l"
              disabled={!isValidForm}
              onClick={
                currentUser.role === 'psychologist'
                  ? () => changePsychologistData(
                    dataForRequest,
                    token,
                    setValue,
                  )
                  : () => changeClientData(dataForRequest, token, setValue)
              }
            >
              Сохранить
            </Button>
          </div>
        </form>
      </BlockWithTitle>
    </section>
  );
}

UserProfileData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
  changePsychoAvatar: func,
  changeClientAvatar: func,
  changePsychologistData: func,
  changeClientData: func,
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
};

UserProfileData.defaultProps = {
  currentUser: {},
  changePsychoAvatar: () => {},
  changeClientAvatar: () => {},
  changePsychologistData: () => {},
  changeClientData: () => {},
};
