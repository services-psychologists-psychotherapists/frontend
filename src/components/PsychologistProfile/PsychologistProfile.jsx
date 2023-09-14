import './PsychologistProfile.css';
import React from 'react';
import Header from '../Header/Header';
import Field from '../Field/Field';

export default function PsychologistProfile() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <Field
            element="input"
            name="login"
            title="Логин"
            type="email"
            placeholder="irina_k@yan.ru"
            prompt="Здесь должна быть подсказка"
          />
          <Field
            element="input"
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
            element="input"
            name="textarea"
            title="Комментарий"
            type="textarea"
            prompt="Здесь должна быть подсказка"
            placeholder="Комментарий"
            maxLength="32"
            minLength="8"
          />
        </form>
      </div>
    </>
  );
}
