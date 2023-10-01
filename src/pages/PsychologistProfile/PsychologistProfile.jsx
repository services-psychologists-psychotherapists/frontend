import './PsychologistProfile.css';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import {
  checkboxDropDownElement,
  checkboxType,
  dropDownLists,
  inputElement,
  radioDropDownElement,
  radioType,
  titlesDropDownElement,
} from '../../constants/constants';
import FieldContainer from '../../components/FieldContainer/FieldContainer';

export default function PsychologistProfile() {
  const [dropDownListRadio] = useState(dropDownLists.genderList);
  const [dropDownListCheckbox] = useState(dropDownLists.approachList);
  const [dropDownListTitles] = useState(dropDownLists.mainGoalsOfWork);

  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <FieldContainer
            element={inputElement}
            title="Логин"
            placeholder="irina_k@yan.ru"
            prompt="Здесь должна быть подсказка"
            name="login"
            typeForInput="email"
          />
          <FieldContainer
            element={inputElement}
            title="Имя"
            placeholder="Александр"
            name="Имя"
            typeForInput="text"
            disabled
          />
          <FieldContainer
            element={inputElement}
            name="password"
            title="Пароль"
            placeholder="********"
            typeForInput="password"
            prompt="Здесь должна быть подсказка"
            maxLength="32"
            minLength="8"
          />
          <FieldContainer
            element={radioDropDownElement}
            title="Пол"
            typeForDropDown={radioType}
            placeholder="выберите пол"
            dropDownContent={dropDownListRadio}
          />
          <FieldContainer
            element={checkboxDropDownElement}
            typeForDropDown={checkboxType}
            title="Подход"
            placeholder="Выберите все подходящие варианты"
            dropDownContent={dropDownListCheckbox}
          />
          <FieldContainer
            element={titlesDropDownElement}
            typeForDropDown={checkboxType}
            title="Основные направления работы"
            placeholder="Выберите все подходящие варианты"
            dropDownContent={dropDownListTitles}
          />
        </form>
      </div>
    </>
  );
}
