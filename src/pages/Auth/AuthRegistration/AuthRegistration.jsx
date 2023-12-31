import React from 'react';
import { bool, objectOf, string, func } from 'prop-types';
import moment from 'moment';
import './AuthRegistration.css';
import Fieldset from '../../../components/Fieldset/Fieldset';
import Button from '../../../components/generic/Button/Button';
import Text from '../../../components/generic/Text/Text';
import { REGISTRATION_INPUT_PARAMS_FOR_CLIENT } from '../../../constants/constants';
import ServiceDocuments from '../../../components/generic/ServiceDocuments/ServiceDocuments';
import { checkPasswords } from '../../../utils/helpers';
// TODO: Выводить сообщения об ошибках в запросах в попапы?

export default function AuthRegistration({
  values,
  handleChange,
  errors,
  isValidForm,
  inputValidStatus,
  getInvalidInput,
  signUp,
  setValue,
}) {
  const handleSubmitRegister = () => {
    const email = values.email.toLowerCase();

    checkPasswords(
      values.password,
      values.password_2,
      setValue,
      {
        first_name: values.name,
        birthday: moment(values.birthday).format('DD.MM.YYYY'),
        phone_number: values.phone_number || '',
        email,
        password: values.password,
      },
      signUp
    );
  };

  return (
    <>
      <div className="auth__registration-psycho">
        <Text size="s" type="span">
          Вы психолог?
        </Text>
        <Button
          href="/psychologists_registration"
          variant="text"
          size="l"
          type="button"
        >
          Нажми здесь
        </Button>
      </div>
      <form className="auth__form-registration" name="registration" noValidate>
        <ul className="auth__form-registration_field-container">
          {REGISTRATION_INPUT_PARAMS_FOR_CLIENT.map((i) => (
            <li key={i.name}>
              <Fieldset
                element={i.element}
                title={i.title}
                name={i.name}
                typeForInput={i.typeForInput}
                required={i.required}
                placeholder={i.placeholder}
                prompt={i.prompt}
                values={values}
                handleChange={(e) => handleChange(e)}
                errors={errors}
                isValid={getInvalidInput(inputValidStatus[i.name])}
                pattern={i.pattern}
                maxLength={i.maxLength}
                minLength={i.minLength}
              />
            </li>
          ))}
        </ul>
        <div className="auth__service-documents">
          <Text size="s" type="span">
            Нажимая кнопку «Зарегистрироваться», Вы соглашаетесь c
          </Text>
          <ServiceDocuments textVariant="whereby" className="auth__service-documents_text" />
        </div>
        <Button
          className="auth__form-registration_button"
          type="submit"
          variant="primary"
          size="l"
          disabled={!isValidForm}
          onClick={handleSubmitRegister}
        >
          Зарегистрироваться
        </Button>
      </form>
    </>
  );
}

AuthRegistration.propTypes = {
  isValidForm: bool.isRequired,
  inputValidStatus: objectOf(bool).isRequired,
  getInvalidInput: func.isRequired,
  values: objectOf(string).isRequired,
  handleChange: func.isRequired,
  errors: objectOf(string).isRequired,
  signUp: func.isRequired,
  setValue: func.isRequired,
};
