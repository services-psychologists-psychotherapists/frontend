import React, { useState } from 'react';
import { func } from 'prop-types';
import './Auth.css';
import { AUTH_BTNS } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import AuthLogin from './AuthLogin/AuthLogin';
import AuthRegistration from './AuthRegistration/AuthRegistration';
import { createUser } from '../../utils/auth';
import { usePopup } from '../../hooks/usePopup';

export default function Auth({
  signIn,
}) {
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

  const { setValue } = usePopup();

  const signUp = async (data) => {
    try {
      const user = await createUser(data);

      signIn({
        email: user.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При регистрации произошла ошибка',
        },
      });
    }
  };

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

  // prettier-ignore
  const getClassesForActiveBtn = (authVariat) => (authVariat ? ' auth__variants_item-active' : ' auth__variants_item-inactive');

  return (
    // TODO: проверить классы
    // TODO: Повторяются компоненты в Typografy Text Teg и FieldContainer Title Dropdown Field
    // TODO: настроить размеры ошибок
    // TODO: написать стори
    // TODO: может не сбрасывать значения инпутов при переключении форм?
    // TODO: Везде где promptClasses="auth__prompt" временная реализация, переделать
    // TODO: добавить прелоадер
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
          signIn={signIn}
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
  );
}

Auth.propTypes = {
  signIn: func.isRequired
};
