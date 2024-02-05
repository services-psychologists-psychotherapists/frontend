import React, { useState } from 'react';
import { func, bool, } from 'prop-types';
import './Auth.css';
import { AUTH_BTNS } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import AuthLogin from './AuthLogin/AuthLogin';
import AuthRegistration from './AuthRegistration/AuthRegistration';
import { createUser } from '../../utils/services/Api';
import { usePopup } from '../../hooks/usePopup';

export default function Auth({
  signIn, isLoading,
  setIsLoading,
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
    setIsLoading(true);
    try {
      const user = await createUser(data);

      signIn({
        email: user.email,
        password: data.password,
      }, setValue);
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При регистрации произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
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

  const getClassesForActiveBtn = (authVariat) => (
    authVariat ? ' auth__variants-item_active' : ' auth__variants-item_inactive'
  );

  return (
    <section className="auth">
      <ul className="auth__variants">
        <li>
          <button
            onClick={handleChangeAuthVariant}
            className={`auth__variants-item${getClassesForActiveBtn(isLogin)}`}
          >
            {AUTH_BTNS.login}
          </button>
        </li>
        <li>
          <button
            onClick={handleChangeAuthVariant}
            className={`auth__variants-item${getClassesForActiveBtn(isRegister)}`}
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
          setValue={setValue}
          isLoading={isLoading}
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
          setValue={setValue}
          isLoading={isLoading}
        />
      )}
    </section>
  );
}

Auth.propTypes = {
  signIn: func.isRequired,
  isLoading: bool.isRequired,
  setIsLoading: func.isRequired,
};
