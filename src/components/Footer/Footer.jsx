import React from 'react';
import './Footer.css';
import Logo from '../generic/Logo/Logo';
import { SOCIAL_MEDIA_ICONS, HEADER_NAV_LINKS } from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import ServiceDocuments from '../generic/ServiceDocuments/ServiceDocuments';
import { usePopup } from '../../hooks/usePopup';
import { showPopupWithValue } from '../../utils/helpers';

export default function Footer() {
  const { setValue } = usePopup();

  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__content">
          <Logo className="footer__logo" />
          <nav>
            <NavLinksList
              list={HEADER_NAV_LINKS}
              navLink={false}
              className="footer__links"
            />
          </nav>
          <ul className="footer__social-networks">
            {SOCIAL_MEDIA_ICONS.map((icon) => (
              <li key={icon.alt}>
                <a
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
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
        <ServiceDocuments
          onClick={() => showPopupWithValue(setValue, 'Документ')}
          className="footer__service-documents"
          textVariant="default"
        />
      </section>
    </footer>
  );
}
