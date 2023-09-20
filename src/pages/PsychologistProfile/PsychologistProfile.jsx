import './PsychologistProfile.css';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { dropDownLists } from '../../constants/constants';
import InputField from '../../components/AllFields/InputField/InputField';
import RadioDropdownField from '../../components/AllFields/RadioDropdownField/RadioDropdownField';
import CheckboxDropdownField from '../../components/AllFields/CheckboxDropdownField/CheckboxDropdownField';
import TitlesDropDownField from '../../components/AllFields/TitlesDropDownField/TitlesDropDownField';

export default function PsychologistProfile() {
  const [dropDownListRadio] = useState(dropDownLists.genderList);
  const [dropDownListCheckbox] = useState(dropDownLists.approachList);
  const [dropDownListTitles] = useState(dropDownLists.mainGoalsOfWork);

  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <InputField
            title="Логин"
            name="login"
            typeForInput="email"
            placeholder="irina_k@yan.ru"
            prompt="Здесь должна быть подсказка"
          />
          <InputField
            name="Имя"
            placeholder="Александр"
            title="Имя"
            typeForInput="text"
            disabled
          />
          <InputField
            name="password"
            title="Пароль"
            typeForInput="password"
            prompt="Здесь должна быть подсказка"
            placeholder="********"
            maxLength="32"
            minLength="8"
          />
          <RadioDropdownField
            name="gender"
            title="Пол"
            placeholder="выберите пол"
            dropDownContent={dropDownListRadio}
          />
          <CheckboxDropdownField
            name="approach"
            title="Подход"
            placeholder="Выберите все подходящие варианты"
            dropDownContent={dropDownListCheckbox}
          />
          <TitlesDropDownField
            name="work-goals"
            title="Основные направления работы"
            placeholder="Выберите все подходящие варианты"
            dropDownContent={dropDownListTitles}
          />
        </form>
      </div>
    </>
  );
}
