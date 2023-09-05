import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../generic/Logo/Logo';
import {
  SOCIAL_MEDIA_ICONS,
  SERVICE_DOCUMENTS,
  NAVIGATION_LINKS,
} from '../../constants/constants';

export default function Footer() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePolicyClick = (el) => {
    setSelectedItem(el);
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo />
        {/* Временная реализация списка навигации */}
        <nav>
          <ul className="footer__nav-list">
            {NAVIGATION_LINKS.map(({ link, text }) => (
              <li key={link}>
                <Link to={link} className="footer__nav-link">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="footer__sotial-networks">
          {SOCIAL_MEDIA_ICONS.map((icon) => (
            <li key={icon.alt}>
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.path}
                  alt={icon.alt}
                  className="footer__social-icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* TODO: правильно подобрать элементы списка */}
      <ul className="footer__policy">
        {SERVICE_DOCUMENTS.map((el) => (
          <li key={el}>
            <button
              className={`footer__policy-item ${
                selectedItem === el ? 'footer__policy-item_selected' : ''
              }`}
              onClick={() => handlePolicyClick(el)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
}
