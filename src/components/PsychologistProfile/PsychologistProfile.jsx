import './PsychologistProfile.css';
import React from 'react';
import Header from '../Header/Header';
import Field from '../Field/Field';
import {
  radioDropDown,
  inputElement,
  checkboxDropDown,
} from '../../constants/constants';

export default function PsychologistProfile() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <Field
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
            disabled
          />
          <Field
            element={radioDropDown}
            name="gender"
            title="Пол"
            type="text"
            placeholder="выберите пол"
          />
          <Field
            element={checkboxDropDown}
            name="approach"
            title="Подход"
            type="text"
            placeholder="Выберите все подходящие варианты"
          />
        </form>
      </div>
    </>
  );
}
