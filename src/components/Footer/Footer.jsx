import React, { useState } from 'react';
import './Footer.css';
import Logo from '../generic/Logo/Logo';
import { SOCIAL_MEDIA_ICONS, SERVICE_DOCUMENTS, HEADER_NAV_LINKS } from '../../constants/constants';
import NavLinksList from '../NavLinksList/NavLinksList';
import ServiceDocuments from '../generic/ServiceDocuments/ServiceDocuments';

export default function Footer() {
  const [selectedItem, setSelectedItem] = useState('');

  const handlePolicyClick = (el) => {
    if (selectedItem) {
      setSelectedItem('');
    } else {
      setSelectedItem(el);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo />
        <nav>
          <NavLinksList list={HEADER_NAV_LINKS} navLink={false} />
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
                <img src={icon.path} alt={icon.alt} className="footer__sotial-networks_icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ServiceDocuments
        selectedItem={selectedItem}
        onClick={handlePolicyClick}
        className="footer__service-documents"
        textVariant="default"
      />
    </footer>
  );
}
