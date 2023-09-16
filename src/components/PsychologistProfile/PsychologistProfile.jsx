import './PsychologistProfile.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import {
  radioDropDown,
  inputElement,
  checkboxDropDown,
  dropDownLists,
} from '../../constants/constants';
import InputField from '../InputField/InputField';
import RadioDropdownField from '../RadioDropdownField/RadioDropdownField';
import CheckboxDropdownField from '../CheckboxDropdownField/CheckboxDropdownField';

export default function PsychologistProfile() {
  const [dropDownListRadio] = useState(dropDownLists.genderList);
  const [dropDownListCheckbox] = useState(dropDownLists.approachList);

  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <InputField
            element={inputElement}
            name="login"
            title="Логин"
            type="email"
            placeholder="irina_k@yan.ru"
            prompt="Здесь должна быть подсказка"
          />
          <InputField
            element={inputElement}
            name="Имя"
            placeholder="Александр"
            title="Имя"
            type="text"
            disabled
          />
          <InputField
            element={inputElement}
            name="password"
            title="Пароль"
            type="password"
            prompt="Здесь должна быть подсказка"
            placeholder="********"
            maxLength="32"
            minLength="8"
          />
          <RadioDropdownField
            element={radioDropDown}
            name="gender"
            title="Пол"
            type="text"
            placeholder="выберите пол"
            dropDownContent={dropDownListRadio}
          />
          <CheckboxDropdownField
            element={checkboxDropDown}
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
