import React from 'react';
import { func } from 'prop-types';
import './ResetPassword.css';
import Text from '../../components/generic/Text/Text';
import Fieldset from '../../components/Fieldset/Fieldset';
import { inputElement } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/generic/Button/Button';
import { usePopup } from '../../hooks/usePopup';
import Title from '../../components/generic/Title/Title';

// TODO: объединить все похожие формы в один компонент?
export default function ResetPassword({ resetPassword }) {
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
    <section className="reset_password">
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
          name="reset_password_email"
          typeForInput="email"
          required
          minLength="1"
          placeholder="Введите email"
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={getInvalidInput(inputValidStatus.create_password_email)}
        />
        <Button
          type="submit"
          variant="primary"
          size="l"
          onClick={() => resetPassword(values.reset_password_email, setValue)}
          disabled={!isValidForm}
          className="reset-password__form-button"
        >
          Отправить
        </Button>
      </form>
    </section>
  );
}

ResetPassword.propTypes = {
  resetPassword: func.isRequired,
};
