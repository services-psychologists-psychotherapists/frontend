import React from 'react';
import {
  func, bool, objectOf, string
} from 'prop-types';
import './AuthLogin.css';
import { LOGIN_INPUT_PARAMS_FOR_CLIENT } from '../../../constants/constants';
import Fieldset from '../../../components/Fieldset/Fieldset';
import Button from '../../../components/generic/Button/Button';

export default function AuthLogin({
  getJwt,
  values,
  handleChange,
  errors,
  isValidForm,
  inputValidStatus,
  getInvalidInput,
}) {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // console.log(getJwt);
    // console.log({
    //   email: values.email,
    //   password: values.password,
    // });
    getJwt({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <form className="auth__form-login" name="login" onSubmit={handleSubmitLogin} noValidate>
      <ul className="auth__form-login_fields">
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
              handleChange={handleChange}
              errors={errors}
              isValid={getInvalidInput(inputValidStatus.email)}
              promptClasses="auth__prompt"
            />
          </li>
        ))}
      </ul>
      {/* Не могу использовать ButtonsGroup так как у меня больше gap */}
      <div className="auth__form-login_buttons">
        <Button variant="text" size="l" type="button">
          Не помню пароль
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="l"
          onClick={handleSubmitLogin}
          disabled={isValidForm === false}
        >
          Войти
        </Button>
      </div>
    </form>
  );
}

AuthLogin.propTypes = {
  getJwt: func.isRequired,
  isValidForm: bool.isRequired,
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
};
