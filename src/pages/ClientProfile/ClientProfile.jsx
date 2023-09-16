import React, { useContext } from 'react';
import { bool } from 'prop-types';
import './ClientProfile.css';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../constants/constants';
import BlockTemplate from '../../components/BlockTemplate/BlockTemplate';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import CurrentUserContext from '../../Context/CurrentUserContext';
import YourPsychoCard from '../../components/generic/Cards/YourPsychoCard/YourPsychoCard';
import Paragraph from '../../components/generic/Paragraph/Paragraph';
import Button from '../../components/generic/Button/Button';

export default function ClientProfile({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const { sessions } = currentUser;

  return (
    <PageTemplate
      title="Главная"
      nav={<NavLinksList list={CLIENT_PROFILE_NAV_LINKS} direction="column" />}
      isLoggedIn={isLoggedIn}
    >
      <>
        <div className="client-account">
          <BlockTemplate title="Следующая сессия">
            <CardOfSession type="client" session={sessions[0]} />
          </BlockTemplate>
          <BlockTemplate title="Ваш психолог">
            <YourPsychoCard user={currentUser} />
          </BlockTemplate>
        </div>
        <div className="client-account__description">
          <Paragraph>Вы можете выбрать другого специалиста</Paragraph>
          <Button variant="text" href="/catalog">Каталог психологов</Button>
        </div>
      </>
    </PageTemplate>
  );
}

ClientProfile.propTypes = {
  isLoggedIn: bool.isRequired
};
