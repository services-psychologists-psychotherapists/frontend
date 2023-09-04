import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../generic/Logo/Logo';
import Button from '../generic/Button/Button';
import NavigationLink from '../generic/NavigationLink/NavigationLink';
import { NAVIGATION_LINKS } from '../../constants/constants';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="nav">
          {NAVIGATION_LINKS.map(({ link, text }) => (
            <li className="nav__item">
              <NavigationLink link={link} text={text} key={link} />
            </li>
          ))}
          <li className="nav__item">
            <Button
              onClick={() => navigate('/signin', { replace: true })}
              variant="secondary"
            >
              Войти
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
