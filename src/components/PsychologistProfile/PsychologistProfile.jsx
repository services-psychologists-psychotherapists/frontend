import './PsychologistProfile.css';
import React from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';

export default function PsychologistProfile() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page">
        <form name="login" noValidate>
          <Input
            name="login"
            title="Логин"
            type="email"
            prompt="Здесь должна быть подсказка"
            placeholder="irina_k@yan.ru"
          />
          <Input
            name="password"
            title="Пароль"
            type="password"
            prompt="Здесь должна быть подсказка"
            placeholder="********"
            maxLength="32"
            minLength="8"
          />
          <Input
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
