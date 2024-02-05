import React from 'react';
import { func, bool, } from 'prop-types';
import './ResetPassword.css';
import Text from '../../components/generic/Text/Text';
import Fieldset from '../../components/generic/Fieldset/Fieldset';
import { inputElement, EMAIL_REGEX } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/generic/Button/Button';
import { usePopup } from '../../hooks/usePopup';
import Title from '../../components/generic/Title/Title';

export default function ResetPassword({
  resetPassword, isLoading,
}) {
  const {
    values,
    handleChange,
    errors,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
  } = useForm();
  const { setValue } = usePopup();

  return (
    <section className="reset-password">
      <Title
        text="Сброс пароля"
        titleLvl="2"
        size="m"
      />
      <form className="reset-password__form">
        <Text
          size="s"
          type="p"
        >
          Введите email, который вы использовали при регистрации профиля, чтобы получить
          письмо для сброса пароля.
        </Text>
        <Fieldset
          element={inputElement}
          title="Email"
          name="email"
          typeForInput="email"
          required
          minLength="1"
          placeholder="Введите email"
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={getInvalidInput(inputValidStatus.email)}
          pattern={EMAIL_REGEX.toString().slice(1, -1)}
        />
        <Button
          type="submit"
          variant="primary"
          size="l"
          onClick={() => resetPassword(values.email, setValue)}
          disabled={!isValidForm}
          className="reset-password__form-button"
        >
          {isLoading ? 'Отправка...' : 'Отправить'}
        </Button>
      </form>
    </section>
  );
}

ResetPassword.propTypes = {
  resetPassword: func.isRequired,
  isLoading: bool.isRequired,
};
