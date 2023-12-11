import React, { useState } from 'react';
import { object, string, func } from 'prop-types';
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

export default function UserProfileData({
  currentUser,
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
}) {
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

  const [listId, setListId] = useState(0);
  const [curBlockType, setCurBlockType] = useState('');

  useUploadDoc(setListId, setCurBlockType, setDocIdForRequest);

  return (
    <section className="user-data">
      <ProfileCard
        data={currentUser}
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
              type="submit"
              variant="secondary"
              size="l"
            >
              Сбросить
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="l"
              disabled={!isValidForm}
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
};

UserProfileData.defaultProps = {
  currentUser: {},
};
