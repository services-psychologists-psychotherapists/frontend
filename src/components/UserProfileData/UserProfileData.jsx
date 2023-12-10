import React from 'react';
import { object } from 'prop-types';
import './UserProfileData.css';
import FirstStep from './data-blocks/FirstStep/FirstStep';
import { useForm } from '../../hooks/useForm';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import Text from '../generic/Text/Text';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';

export default function UserProfileData({ currentUser }) {
  const {
    values, handleChange, errors,
    selectedDropdownItems,
    dataForRequest,
    // isValidForm,
    inputValidStatus,
    getInvalidInput,
    // setCustomValue,
    // resetCustomValue,
    setDataForRequest,
    // getYears,
    // fileForRequest,
  } = useForm();

  return (
    <section className="user-data">
      <ProfileCard
        data={currentUser}
      />
      <BlockWithTitle
        title="Анкетные данные"
      >
        <form className="user-data__form">
          <div className="user-data__form-block">
            <Text
              size="s"
              className="user-data__block-title"
            >
              Общая информация
            </Text>
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
          </div>
        </form>
      </BlockWithTitle>
    </section>
  );
}

UserProfileData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
};

UserProfileData.defaultProps = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: {},
};
