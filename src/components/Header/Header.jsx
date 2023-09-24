import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../generic/Logo/Logo';
import Button from '../generic/Button/Button';
import { HEADER_NAV_LINKS } from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import UserMenu from './UserMenu/UserMenu';

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <NavLinksList list={HEADER_NAV_LINKS} />
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button variant="secondary" href="/signin">
            Войти
          </Button>
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
