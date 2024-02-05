import React, { useContext, useEffect } from 'react';
import { func } from 'prop-types';
import './ClientHomePage.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS, POPUP_DATA } from '../../constants/constants';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import CardOfSession from '../../components/Cards/CardOfSession/CardOfSession';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Text from '../../components/generic/Text/Text';
import Button from '../../components/generic/Button/Button';
import YourPsychologist from '../../components/Cards/YourPsychologist/YourPsychologist';
import { deleteSession } from '../../utils/services/Api';
import { usePopup } from '../../hooks/usePopup';
import { showPopupWithValue } from '../../utils/helpers';

export default function ClientHomePage({ getUser }) {
  const currentUser = useContext(CurrentUserContext);
  const jwt = localStorage.getItem('jwt');
  const nextSession = currentUser.next_session;
  const { setValue, setOnClick } = usePopup();

  const handleDeleteSession = async () => {
    try {
      await deleteSession(nextSession.id, jwt);

      getUser(jwt);
      showPopupWithValue(
        setValue,
        'Сессия отменена успешно!',
        'Оплата вернется в течение 7 дней',
      );
    } catch (err) {
      console.log(err);
      showPopupWithValue(
        setValue,
        'При отмене сессии произошла ошибка',
      );
    }
  };

  const handleDeleteSessionClick = () => {
    setOnClick(() => handleDeleteSession);
    setValue(POPUP_DATA.deleteSession);
  };

  useEffect(() => {
    getUser(jwt);
  }, []);

  return (
    <PageLayout
      title="Личный кабинет"
      nav={(
        <NavLinksList
          list={CLIENT_PROFILE_NAV_LINKS}
          isList
          variant="menu"
          className="client-profile__nav-links"
        />
      )}
    >
      <div className="client-account">
        <BlockWithTitle title="Следующая сессия">
          <CardOfSession
            session={nextSession}
            type="psychologist"
            handleDeleteSessionClick={handleDeleteSessionClick}
          />
        </BlockWithTitle>
        <BlockWithTitle title="Ваш психолог">
          <YourPsychologist psychologist={currentUser.my_psychologist} nextSession={nextSession} />
        </BlockWithTitle>
      </div>
      {currentUser.my_psychologist.id && (
        <div className="client-account__description">
          <Text>Вы можете выбрать другого специалиста, перейдя в</Text>
          <Button variant="text" href="/directory_psychologists">
            Каталог психологов
          </Button>
        </div>
      )}
    </PageLayout>
  );
}

ClientHomePage.propTypes = {
  getUser: func.isRequired,
};
