import React, { useContext } from 'react';
import { bool } from 'prop-types';
import './ClientHomePage.css';
import PageLayout from '../../components/templates/PageTemplate/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../constants/constants';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import CurrentUserContext from '../../Context/CurrentUserContext';
import YourPsychoCard from '../../components/generic/Cards/YourPsychoCard/YourPsychoCard';
import Paragraph from '../../components/generic/Paragraph/Paragraph';
import Button from '../../components/generic/Button/Button';
import { getNextAppointment } from '../../utils/helpers';

export default function ClientHomePage({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const { sessions } = currentUser;

  return (
    <PageLayout
      title="Главная"
      // prettier-ignore
      nav={(
        // временная реализация
        <div className="page__nav-links">
          <NavLinksList list={CLIENT_PROFILE_NAV_LINKS} direction="column" />
        </div>
      )}
      isLoggedIn={isLoggedIn}
    >
      <>
        <div className="client-account">
          <BlockWithTitle title="Следующая сессия">
            <CardOfSession
              type="client"
              session={getNextAppointment(sessions)}
            />
          </BlockWithTitle>
          <BlockWithTitle title="Ваш психолог">
            <YourPsychoCard user={currentUser} />
          </BlockWithTitle>
        </div>
        {currentUser.psycho && (
          <div className="client-account__description">
            <Paragraph>Вы можете выбрать другого специалиста</Paragraph>
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
