import React, { useState } from 'react';
import { object, func } from 'prop-types';
import { usePopup } from '../../hooks/usePopup';
import './CreatePassword.css';
import { createPassword } from '../../utils/auth';
import { showPopupWithValue, checkPasswords } from '../../utils/helpers';
import { useForm } from '../../hooks/useForm';
import Text from '../../components/generic/Text/Text';
import Button from '../../components/generic/Button/Button';
import { INPUT_DATA_FOR_SET_PASSWORD, inputElement } from '../../constants/constants';
import Fieldset from '../../components/Fieldset/Fieldset';
import Title from '../../components/generic/Title/Title';
import Success from '../../components/Success/Success';

export default function CreatePassword({ curPath, resetPassword }) {
  const {
    values,
    handleChange,
    errors,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
  } = useForm();
  const { setValue } = usePopup();

  const [isSucsess, setIsSucsess] = useState(false);
  const [uId, token] = curPath.pathname.split('/').slice(-2);

  const isCorrectLink = token.length > 5 && uId.length > 5;

  const setPassword = async (curToken, curuId, pass) => {
    try {
      await createPassword(curToken, curuId, pass);

      setIsSucsess(true);
    } catch (err) {
      console.log(err);

      showPopupWithValue(setValue, 'Произошла ошибка при установке пароля');
    }
  };

  const handleSubmit = () => {
    checkPasswords(
      values.new_password_create_password,
      values.new2_password_create_password,
      setValue,
      {
        uid: uId,
        token,
        new_password: values.new_password_create_password,
      },
      setPassword,
    );
  };

  return (
    <section className="create-password">
      {
        isSucsess && (
          <Success
            title="Пароль успешно установлен"
            text="Теперь вы можете войти в свой профиль."
            buttonText="Перейти на страницу авторизации"
            buttonHref="/signin"
          />
        )
      }
      {!isSucsess
        && (
          <>
            <Title
              text="Подтверждение пароля"
              titleLvl="2"
              size="m"
            />
            <form className="create-password__form">
              {isCorrectLink && (
              <ul className="create-password__list">
                {INPUT_DATA_FOR_SET_PASSWORD.map((i) => (
                  <li key={i.name}>
                    <Fieldset
                      element={i.element}
                      title={i.title}
                      name={i.name}
                      placeholder={i.placeholder}
                      typeForInput={i.typeForInput}
                      required={i.required}
                      minLength={i.minLength}
                      prompt={i.prompt || null}
                      values={values}
                      handleChange={handleChange}
                      errors={errors}
                      isValid={getInvalidInput(inputValidStatus[i.name])}
                      fieldsetClasses={i.fieldsetClasses || null}
                      promptClasses={i.promptClasses || null}
                    />
                  </li>
                ))}
              </ul>
              )}
              {!isCorrectLink && (
              <>
                <Text
                  size="s"
                  type="p"
                  className="create-password__text"
                >
                  Ссылка некорректна.
                  <br />
                  <br />
                  Для повторной отправки ссылки введите email,
                  который вы использовали при регистрации профиля.
                </Text>
                <Fieldset
                  element={inputElement}
                  title="Email"
                  name="create_password_email"
                  typeForInput="email"
                  required
                  minLength="1"
                  placeholder="Введите email"
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  isValid={getInvalidInput(inputValidStatus.create_password_email)}
                />
              </>
              )}
              <Button
                type="submit"
                variant="primary"
                size="l"
                onClick={
                  isCorrectLink
                    ? handleSubmit
                    : () => resetPassword(values.create_password_email, setValue)
                }
                disabled={!isValidForm}
                className="create-password__form-button"
              >
                {isCorrectLink && 'Сохранить пароль'}
                {!isCorrectLink && 'Отправить ссылку'}
              </Button>
            </form>
          </>
        )}
    </section>
  );
}

CreatePassword.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  resetPassword: func.isRequired,
};
