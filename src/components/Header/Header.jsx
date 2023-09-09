import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../generic/Logo/Logo';
import Button from '../generic/Button/Button';
import { NAVIGATION_LINKS } from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import UserMenu from '../UserMenu/UserMenu';

export default function Header({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <NavLinksList list={NAVIGATION_LINKS} />
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button
            onClick={() => navigate('/signin', { replace: true })}
            variant="secondary"
          >
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
