import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../generic/Logo/Logo';
import BtnSecondary from '../generic/BtnSecondary/BtnSecondary';
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
              <NavigationLink link={link} text={text} key={link}/>
            </li>
          ))}
          <li className="nav__item">
            <BtnSecondary
              onClick={() => navigate('/signin', { replace: true })}
            >
              Войти
            </BtnSecondary>
          </li>
        </ul>
      </nav>
    </header>
  );
}
