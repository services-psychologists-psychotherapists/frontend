import React, { useContext, useRef, useState } from 'react';
import { func, bool } from 'prop-types';
import './UserMenu.css';
import CurrentUserContext from '../../../Context/CurrentUserContext';
import NavLinksList from '../../NavLinksList/NavLinksList';
import { HEADER_NAV_LINKS } from '../../../constants/constants';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import Avatar from '../../generic/Avatar/Avatar';

export default function UserMenu({
  signOut, isScreenMd, isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const userLink = {
    text: 'Личный кабинет',
    link: `${currentUser.role}_account`,
  };

  const getNavLinks = () => {
    if (isLoggedIn && !isScreenMd) {
      return [...HEADER_NAV_LINKS, userLink];
    }
    if (isLoggedIn && isScreenMd) {
      return [userLink];
    }
    return HEADER_NAV_LINKS;
  };

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const handleClickMenu = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="user" onClick={handleClickMenu}>
        {isLoggedIn && (<Avatar src={currentUser.avatar} size="xs" />)}
        <p className={`user__name ${isOpen ? 'user__name_opened' : ''}`}>
          {`${currentUser.first_name}`}
        </p>
        {!isScreenMd && (
          <div className={`burger-menu${isOpen ? ' burger-menu_opened' : ''}`}>
            <span className="burger-menu__point" />
            <span className="burger-menu__point" />
            <span className="burger-menu__point" />
          </div>
        )}
      </button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list_opened' : ''}`}>
        <NavLinksList list={getNavLinks()} direction="column" />
        {isLoggedIn && (
        <li>
          <button className="exit-btn" onClick={signOut}>
            Выйти
          </button>
        </li>
        )}
      </ul>
    </div>
  );
}

UserMenu.propTypes = {
  signOut: func.isRequired,
  isScreenMd: bool.isRequired,
  isLoggedIn: bool.isRequired,
};
