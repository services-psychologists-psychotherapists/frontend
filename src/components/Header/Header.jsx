import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../generic/Logo/Logo';
import Button from '../generic/Button/Button';
import NavigationLink from '../generic/NavigationLink/NavigationLink';
import { NAVIGATION_LINKS } from '../../constants/constants';

export default function Header({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="nav">
          {NAVIGATION_LINKS.map(({ link, text }) => (
            <li className="nav__item" key={link}>
              <NavigationLink link={link} text={text} />
            </li>
          ))}
          <li className="nav__item">
            {isLoggedIn ? (
              <div />
            ) : (
              <Button
                onClick={() => navigate('/signin', { replace: true })}
                variant="secondary"
              >
                Войти
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
