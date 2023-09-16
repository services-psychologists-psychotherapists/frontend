import './PsychologistProfile.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Field from '../Field/Field';
import {
  radioDropDown,
  inputElement,
  checkboxDropDown,
  dropDownLists,
} from '../../constants/constants';
import InputField from '../InputField/InputField';

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
          <Field
            element={inputElement}
            name="password"
            title="Пароль"
            type="password"
            prompt="Здесь должна быть подсказка"
            placeholder="********"
            maxLength="32"
            minLength="8"
            required
          />
          <Field
            element={radioDropDown}
            name="gender"
            title="Пол"
            type="text"
            placeholder="выберите пол"
            dropDownContent={dropDownListRadio}
          />
          <Field
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
