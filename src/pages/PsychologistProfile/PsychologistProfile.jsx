import './PsychologistProfile.css';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { dropDownLists } from '../../constants/constants';
import InputField from '../../components/InputField/InputField';
import RadioDropdownField from '../../components/RadioDropdownField/RadioDropdownField';
import CheckboxDropdownField from '../../components/CheckboxDropdownField/CheckboxDropdownField';

export default function PsychologistProfile() {
  const [dropDownListRadio] = useState(dropDownLists.genderList);
  const [dropDownListCheckbox] = useState(dropDownLists.approachList);

  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <InputField
            name="login"
            title="Логин"
            type="email"
            placeholder="irina_k@yan.ru"
            prompt="Здесь должна быть подсказка"
          />
          <InputField
            name="Имя"
            placeholder="Александр"
            title="Имя"
            type="text"
            disabled
          />
          <InputField
            name="password"
            title="Пароль"
            type="password"
            prompt="Здесь должна быть подсказка"
            placeholder="********"
            maxLength="32"
            minLength="8"
          />
          <RadioDropdownField
            name="gender"
            title="Пол"
            type="text"
            placeholder="выберите пол"
            dropDownContent={dropDownListRadio}
          />
          <CheckboxDropdownField
            name="approach"
            title="Подход"
            type="text"
            placeholder="Выберите все подходящие варианты"
            dropDownContent={dropDownListCheckbox}
          />
        </form>
      </div>
    </>
  );
}
