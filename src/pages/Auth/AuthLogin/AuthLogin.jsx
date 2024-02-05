import React from 'react';
import { func, bool, objectOf, string } from 'prop-types';
import './AuthLogin.css';
import { LOGIN_INPUT_PARAMS_FOR_CLIENT } from '../../../constants/constants';
import Fieldset from '../../../components/generic/Fieldset/Fieldset';
import Button from '../../../components/generic/Button/Button';

export default function AuthLogin({
  signIn, isLoading,
  values, handleChange,
  errors, isValidForm,
  inputValidStatus, getInvalidInput,
  setValue,
}) {
  const handleSubmitLogin = () => {
    const email = values.email.toLowerCase();

    signIn({
      email,
      password: values.password,
    }, setValue);
  };

  return (
    <form className="auth__form-login" name="login" noValidate>
      <ul className="auth__form-login-fields">
        {LOGIN_INPUT_PARAMS_FOR_CLIENT.map((i) => (
          <li key={i.name}>
            <Fieldset
              title={i.title}
              element={i.element}
              name={i.name}
              typeForInput={i.typeForInput}
              minLength={i.minLength}
              required={i.required}
              values={values}
              handleChange={(e) => handleChange(e)}
              errors={errors}
              isValid={getInvalidInput(inputValidStatus[i.name])}
              placeholder={i.placeholder}
              pattern={i.pattern}
              maxLength={i.maxLength}
              promptClasses={i.promptClasses}
            />
          </li>
        ))}
      </ul>
      <ul className="auth__form-login-buttons">
        <Button variant="text" size="l" type="button" href="/reset_password">
          Не помню пароль
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="l"
          onClick={handleSubmitLogin}
          disabled={!isValidForm || isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </Button>
      </ul>
    </form>
  );
}

AuthLogin.propTypes = {
  signIn: func.isRequired,
  isValidForm: bool.isRequired,
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  setValue: func.isRequired,
  isLoading: bool.isRequired,
};
