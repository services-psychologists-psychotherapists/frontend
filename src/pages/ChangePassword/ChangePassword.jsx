import React from 'react';
import { func, object } from 'prop-types';
import './ChangePassword.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import Button from '../../components/generic/Button/Button';
import Fieldset from '../../components/Fieldset/Fieldset';
import { INPUT_DATA_FOR_CHANGE_PASSWORD } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import {
  showPopupWithValue,
  checkPasswords,
} from '../../utils/helpers';
import { usePopup } from '../../hooks/usePopup';
import { setNewPasswords } from '../../utils/auth';

export default function ChangePassword({ navigate, goBack, currentUser }) {
  const {
    values,
    handleChange,
    errors,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
  } = useForm();
  const { setValue } = usePopup();

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
      values.password,
      values.password_2,
      setValue,
      {
        new_password: values.password,
        current_password: values.old_password,
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
            {INPUT_DATA_FOR_CHANGE_PASSWORD.map((i) => (
              <li key={i.name}>
                <Fieldset
                  element={i.element}
                  title={i.title}
                  name={i.name}
                  typeForInput={i.typeForInput}
                  required={i.required}
                  minLength={i.minLength}
                  prompt={i.prompt}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  isValid={getInvalidInput(inputValidStatus[i.name])}
                  fieldsetClasses={i.fieldsetClasses}
                  disabled={i.disabled}
                  placeholder={i.name === 'email' ? currentUser.email : i.placeholder}
                  pattern={i.pattern}
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
  goBack: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object.isRequired,
};
