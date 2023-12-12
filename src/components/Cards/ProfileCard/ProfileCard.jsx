import React, { useEffect } from 'react';
import { object, func, objectOf, string } from 'prop-types';
import './ProfileCard.css';
import Button from '../../generic/Button/Button';
import { PROFILE_FIELDS, POPUP_DATA } from '../../../constants/constants';
import Title from '../../generic/Title/Title';
import Avatar from '../../generic/Avatar/Avatar';
import { usePopup } from '../../../hooks/usePopup';

export default function ProfileCard({
  currentUser, changeClientAvatar,
  changePsychoAvatar, values
}) {
  const { setValue, setOnClick } = usePopup();
  const jwt = localStorage.getItem('jwt');

  const handleFileSelect = (event, userData) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (userData.role === 'client') {
        changeClientAvatar(reader.result, jwt, setValue);
      } else {
        changePsychoAvatar(reader.result, jwt, setValue);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const createInputForUploadingPhoto = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => handleFileSelect(e, currentUser);
      input.click();
    };

    setOnClick(() => createInputForUploadingPhoto);
  }, [values, currentUser]);

  return (
    <section className="profile-card">
      <Title
        size="xs"
        titleLvl="3"
        text="Основное"
      />
      <div className="profile-card__content">
        <div className="profile-card__container">
          <Avatar
            src={currentUser.avatar || ''}
            size="xl"
            onClick={() => setValue(POPUP_DATA.avatar)}
          />
          <ul className="profile-card__container_data">
            {PROFILE_FIELDS.map((i) => (
              <li key={i.title}>
                <div className="profile-card__fieldset">
                  <span className="profile-card__fieldset_title">
                    {i.title}
                  </span>
                  <div className="profile-card__fieldset_field">
                    <span className="profile-card__fieldset_text">
                      {i.title === 'Логин' ? currentUser.email : i.text}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Button
            variant="secondary"
            className="profile-card__button"
            onClick={() => setValue(POPUP_DATA.changePassword)}
          >
            Изменить пароль
          </Button>
        </div>
      </div>
    </section>
  );
}

ProfileCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  changePsychoAvatar: func,
  changeClientAvatar: func,
  values: objectOf(string),
};

ProfileCard.defaultProps = {
  currentUser: {},
  changePsychoAvatar: () => {},
  changeClientAvatar: () => {},
  values: {},
};
