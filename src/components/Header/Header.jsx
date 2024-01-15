import React from 'react';
import { bool, func } from 'prop-types';
import './Header.css';
import Logo from '../generic/Logo/Logo';
import Button from '../generic/Button/Button';
import { HEADER_NAV_LINKS, POPUP_DATA } from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import UserMenu from './UserMenu/UserMenu';
import { usePopup } from '../../hooks/usePopup';
import { useResize } from '../../hooks/useResize';

export default function Header({ isLoggedIn, signOut }) {
  const { setOnClick, setValue } = usePopup();
  const { isScreenMd } = useResize();

  const handleOut = () => {
    setOnClick(() => signOut);
    setValue(POPUP_DATA.header);
  };

  return (
    <header className="header">
      <section className="header__container">
        <Logo />
        <nav className="header__nav">
          <NavLinksList
            list={HEADER_NAV_LINKS}
            signOut={signOut}
          />
          {!isLoggedIn && (
          <Button
            variant="secondary"
            href="/signin"
            className="header__button"
          >
            Войти
          </Button>
          )}
          {(isLoggedIn || isScreenMd) && (
            <UserMenu
              signOut={handleOut}
              isScreenMd={isScreenMd}
              isLoggedIn={isLoggedIn}
            />
          )}
        </nav>
      </section>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: bool.isRequired,
  signOut: func.isRequired,
};
