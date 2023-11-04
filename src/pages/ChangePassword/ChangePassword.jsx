import React from 'react';
import { func } from 'prop-types';
import './ChangePassword.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import Button from '../../components/generic/Button/Button';
import Fieldset from '../../components/Fieldset/Fieldset';
import { INPUT_DATA_FOR_RESET_PASSWORD } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import {
  showPopupWithValue,
  checkPasswords,
} from '../../utils/helpers';
import { usePopup } from '../../hooks/usePopup';
import { setNewPasswords } from '../../utils/auth';

export default function ChangePassword({ navigate }) {
  const {
    values,
    handleChange,
    errors,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
  } = useForm();
  const { setValue } = usePopup();

  const goBack = () => {
    navigate(-1);
  };

  const setPassword = async (passwords) => {
    try {
      const newPassword = await setNewPasswords(passwords);

      if (newPassword) {
        showPopupWithValue(setValue, 'Пароль успешно изменен');
        navigate('/client_profile');
      }
    } catch (err) {
      console.log(err);
      showPopupWithValue(setValue, 'Произошла ошибка при смене пароля');
    }
  };

  const handleSubmit = () => {
    checkPasswords(
      values.new_password_change_password,
      values.new2_password_change_password,
      setValue,
      {
        new_password: values.new_password_change_password,
        current_password: values.old_password_change_password,
      },
      setPassword,
    );
  };

  return (
    <div className="change-password">
      <PageLayout
        title="Изменение пароля"
        isLoggedIn
        section={(
          <Button variant="text-icon" onClick={() => goBack()}>
            Назад
          </Button>
        )}
      >
        <form className="change-password__form">
          <ul className="change-password__input-list">
            {INPUT_DATA_FOR_RESET_PASSWORD.map((i) => (
              <li key={i.name}>
                {/* TODO: доставать значение email из данных */}
                <Fieldset
                  element={i.element}
                  title={i.title}
                  name={i.name}
                  typeForInput={i.typeForInput}
                  required={i.required}
                  minLength={i.minLength}
                  prompt={i.prompt || null}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  isValid={getInvalidInput(inputValidStatus[i.name])}
                  promptClasses={i.promptClasses || null}
                  fieldsetClasses={i.fieldsetClasses || null}
                  disabled={i.disabled || false}
                  placeholder={i.placeholder || null}
                />
              </li>
            ))}
          </ul>
          <Button
            type="submit"
            variant="primary"
            size="l"
            onClick={handleSubmit}
            disabled={!isValidForm}
            className="change-password__form-button"
          >
            Сохранить изменения
          </Button>
        </form>
      </PageLayout>
    </div>
  );
}

ChangePassword.propTypes = {
  navigate: func.isRequired,
};
