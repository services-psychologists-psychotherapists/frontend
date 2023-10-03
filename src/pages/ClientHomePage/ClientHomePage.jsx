import React, { useContext } from 'react';
import { bool } from 'prop-types';
import './ClientHomePage.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../constants/constants';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import CardOfSession from '../../components/Cards/CardOfSession/CardOfSession';
import CurrentUserContext from '../../Context/CurrentUserContext';
import Text from '../../components/generic/Text/Text';
import Button from '../../components/generic/Button/Button';
import MyPsychologist from '../../components/Cards/MyPsychologist/MyPsychologist';

export default function ClientHomePage({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const nextSession = currentUser.next_session;

  return (
    <PageLayout
      title="Главная"
      // prettier-ignore
      nav={<NavLinksList list={CLIENT_PROFILE_NAV_LINKS} direction="column" variant="violet" />}
      isLoggedIn={isLoggedIn}
    >
      <>
        <div className="client-account">
          <BlockWithTitle title="Следующая сессия">
            <CardOfSession session={nextSession} type="psychologist" />
          </BlockWithTitle>
          <BlockWithTitle title="Ваш психолог">
            <MyPsychologist psychologist={currentUser.my_psychologist} nextSession={nextSession} />
          </BlockWithTitle>
        </div>
        {currentUser.my_psychologist && (
          <div className="client-account__description">
            <Text>Вы можете выбрать другого специалиста, перейдя в</Text>
            <Button variant="text" href="/catalog">
              Каталог психологов
            </Button>
          </div>
        )}
      </>
    </PageLayout>
  );
}

ClientHomePage.propTypes = {
  isLoggedIn: bool.isRequired,
};
