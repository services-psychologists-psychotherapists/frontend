import React, { useState } from 'react';
import { func } from 'prop-types';
import './Auth.css';
import Header from '../../components/Header/Header';
import { AUTH_BTNS } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import AuthLogin from './AuthLogin/AuthLogin';
import AuthRegistration from './AuthRegistration/AuthRegistration';

export default function Auth({ getJwt, signUp }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const {
    values,
    handleChange,
    errors,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
    resetForm,
  } = useForm();

  const handleChangeAuthVariant = (e) => {
    if (isLogin && e.target.innerText === AUTH_BTNS.registration) {
      setIsLogin(false);
      setIsRegister(true);
    } else if (e.target.innerText === AUTH_BTNS.login) {
      setIsLogin(true);
      setIsRegister(false);
    }

    resetForm();
  };

  const getClassesForActiveBtn = (authVariat) => (authVariat ? ' auth__variants_item-active' : ' auth__variants_item-inactive');

  return (
    // TODO: Подключить сервер
    // TODO: убрать Header (должен быть в app)
    // TODO: проверить классы
    // TODO: Повторяются компоненты в Typografy Text Teg и FieldContainer Title Dropdown Field
    // TODO: настроить размеры ошибок
    // TODO: написать стори
    // TODO: может не сбрасывать значения инпутов при переключении форм?
    // TODO: Везде где promptClasses="auth__prompt" временная реализация, переделать
    // TODO: настроить поля паролей
    <>
      <Header isLoggedIn={false} />
      <section className="auth">
        <ul className="auth__variants">
          <li>
            <button
              onClick={handleChangeAuthVariant}
              className={`auth__variants_item${getClassesForActiveBtn(isLogin)}`}
            >
              {AUTH_BTNS.login}
            </button>
          </li>
          <li>
            <button
              onClick={handleChangeAuthVariant}
              className={`auth__variants_item${getClassesForActiveBtn(isRegister)}`}
            >
              {AUTH_BTNS.registration}
            </button>
          </li>
        </ul>
        {isLogin && (
          <AuthLogin
            getJwt={getJwt}
            values={values}
            handleChange={handleChange}
            errors={errors}
            isValidForm={isValidForm}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
          />
        )}
        {isRegister && (
          <AuthRegistration
            values={values}
            handleChange={handleChange}
            errors={errors}
            isValidForm={isValidForm}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            signUp={signUp}
          />
        )}
      </section>
    </>
  );
}

Auth.propTypes = {
  getJwt: func.isRequired,
  signUp: func.isRequired,
};
