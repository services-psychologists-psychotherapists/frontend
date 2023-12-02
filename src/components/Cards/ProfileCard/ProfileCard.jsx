import React from 'react';
import { object } from 'prop-types';
import './ProfileCard.css';
import Button from '../../generic/Button/Button';
import { PROFILE_FIELDS, POPUP_DATA } from '../../../constants/constants';
import Title from '../../generic/Title/Title';
import Avatar from '../../generic/Avatar/Avatar';
import { usePopup } from '../../../hooks/usePopup';

export default function ProfileCard({ data }) {
  const { setValue } = usePopup();

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
            src={data.avatar || ''}
            size="xl"
            onClick={() => {}}
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
                      {i === 'Логин' ? data.email : i.text}
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
  data: object,
};

ProfileCard.defaultProps = {
  data: {},
};
