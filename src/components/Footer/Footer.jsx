import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import Logo from '../generic/Logo/Logo';
import {
  SOCIAL_MEDIA_ICONS,
  SERVICE_DOCUMENTS,
  NAVIGATION_LINKS,
} from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import { getBtnUpPathStatus } from '../../utils/helpers';

export default function Footer({ currentPagePath }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPathWithBtnUp, setIsPathWithBtnUp] = useState(false);

  const handlePolicyClick = (el) => {
    setSelectedItem(el);
  };

  useEffect(() => {
    setIsPathWithBtnUp(getBtnUpPathStatus(currentPagePath));
  }, [currentPagePath]);

  return (
    <footer className="footer">
      {isPathWithBtnUp && <ButtonUp />}
      <div className="footer__content">
        <Logo />
        <nav>
          <NavLinksList list={NAVIGATION_LINKS} navLink={false} />
        </nav>
        <ul className="footer__sotial-networks">
          {SOCIAL_MEDIA_ICONS.map((icon) => (
            <li key={icon.alt}>
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__sotial-networks_link"
              >
                <img
                  src={icon.path}
                  alt={icon.alt}
                  className="footer__sotial-networks_icon"
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
              className={`footer__policy_item ${
                selectedItem === el ? 'footer__policy_item_selected' : ''
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

Footer.propTypes = {
  currentPagePath: PropTypes.string.isRequired,
};
