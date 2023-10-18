import React from 'react';
import { bool, objectOf, string, func } from 'prop-types';
import './AuthRegistration.css';
import Fieldset from '../../../components/Fieldset/Fieldset';
import Button from '../../../components/generic/Button/Button';
import Text from '../../../components/generic/Text/Text';
import { REGISTRATION_INPUT_PARAMS_FOR_CLIENT } from '../../../constants/constants';
import ServiceDocuments from '../../../components/generic/ServiceDocuments/ServiceDocuments';
import { usePopup } from '../../../hooks/usePopup';
import {
  checkPasswords,
} from '../../../utils/helpers';

export default function AuthRegistration({
  values,
  handleChange,
  errors,
  isValidForm,
  inputValidStatus,
  getInvalidInput,
  signUp,
}) {
  const { setValue } = usePopup();

  const handleSubmitRegister = () => {
    checkPasswords(
      values.passowrd_regist,
      values.passowrd2_regist,
      setValue,
      {
        first_name: values.name_regist,
        birthday: values.birthday_regist,
        phone_number: values.phone_regist || '',
        email: values.email_regist,
        password: values.passowrd_regist,
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
          // TODO: сделать переход на стр. рег. псих.
          href="/for_a_therapist"
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
                element={i.element || null}
                title={i.title || null}
                name={i.name || null}
                typeForInput={i.typeForInput || null}
                required={i.required || false}
                placeholder={i.placeholder || null}
                prompt={i.prompt || null}
                values={values}
                handleChange={handleChange}
                errors={errors}
                isValid={getInvalidInput(inputValidStatus[i.name])}
                promptClasses={i.promptClasses || null}
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
};
