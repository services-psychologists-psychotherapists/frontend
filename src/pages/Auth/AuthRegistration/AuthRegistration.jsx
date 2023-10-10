import React from 'react';
import {
  bool, objectOf, string, func
} from 'prop-types';
import './AuthRegistration.css';
import Fieldset from '../../../components/Fieldset/Fieldset';
import Button from '../../../components/generic/Button/Button';
import Text from '../../../components/generic/Text/Text';
import { REGISTRATION_INPUT_PARAMS_FOR_CLIENT } from '../../../constants/constants';
import ServiceDocuments from '../../../components/generic/ServiceDocuments/ServiceDocuments';

export default function AuthRegistration({
  values,
  handleChange,
  errors,
  isValidForm,
  inputValidStatus,
  getInvalidInput,
}) {
  return (
    <>
      <div className="auth__psycho">
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
      <form className="auth__form-registration" name="registration">
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
                promptClasses="auth__prompt"
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
        {/* TODO: настроить кнопку */}
        <Button
          className="auth__form-registration_button"
          type="submit"
          variant="primary"
          size="l"
          disabled={isValidForm === false}
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
};
